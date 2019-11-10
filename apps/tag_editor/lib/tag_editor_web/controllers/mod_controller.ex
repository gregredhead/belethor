defmodule TagEditorWeb.ModController do
  use TagEditorWeb, :controller
  require Logger
  import Common.Utils, only: [debug: 1]

  alias Common.Repo
  alias Common.Schema.Mod
  alias Common.Schema.ModFile
  alias Common.Schema.ModList
  alias Ecto.Changeset


  def all(conn, %{}) do
    render(conn, "all.html", mod: Repo.all(Mod)) #TODO add paging and a search filter
  end

  def view(conn, %{"id" => id}) do
    mod = Repo.get(Mod, id)
    changeset = Changeset.change(mod)
    action = Routes.mod_path(conn, :update, mod.id)
    daction = Routes.mod_path(conn, :delete, mod.id)
    render(conn, "edit.html", mod: mod, changeset: changeset, action: action, delete: daction)
  end

  def new(conn, %{}) do
    mod = %Mod{}
    changeset = Changeset.change(mod)
    action = Routes.mod_path(conn, :create)
    render(conn, "edit.html", mod: mod, changeset: changeset, action: action)
  end

  def create(conn, %{"mod" => changes}) do
    %Mod{}
    |> Mod.changeset(changes)
    |> Repo.insert!

    redirect(conn, to: "/mod/")
  end

  def update(conn, %{"id" => id, "mod" => changes}) do
    Mod
    |> Repo.get(id)
    |> Mod.changeset(changes)
    |> Repo.update!

    redirect(conn, to: "/mod/")
  end

  def delete(conn, %{"id" => id}) do
    Mod.delete!(id)
    redirect(conn, to: "/mod/")
  end

end
