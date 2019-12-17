sidebarNodes={"extras":[{"id":"api-reference","title":"API Reference","group":"","headers":[{"id":"Modules","anchor":"modules"}]},{"id":"readme","title":"README","group":"","headers":[{"id":"License (Apache)","anchor":"license-apache"}]},{"id":"website-readme","title":"Website README","group":"","headers":[{"id":"Learn more","anchor":"learn-more"}]},{"id":"dev-on-nixos","title":"Development on NixOS","group":"","headers":[{"id":"install postgresql","anchor":"install-postgresql"},{"id":"Elixir, Nodejs, etc","anchor":"elixir-nodejs-etc"}]},{"id":"website_overview","title":"Website Overview","group":"Website","headers":[]},{"id":"website_mockups","title":"Website Mockups","group":"Website","headers":[{"id":"Most recent","anchor":"most-recent"},{"id":"Older mockups","anchor":"older-mockups"}]},{"id":"search_reference","title":"Search Reference","group":"Searching","headers":[]},{"id":"what_tools_do_i_need","title":"What Tools Do I Need?","group":"Modding","headers":[]},{"id":"mo1_reference","title":"MO1 Reference","group":"Advanced Modding","headers":[]},{"id":"submitting_a_mod","title":"Submitting a Mod","group":"Mod Curation","headers":[]}],"exceptions":[],"modules":[{"id":"Common","title":"Common","group":""},{"id":"Common.ModDB","title":"Common.ModDB","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"add_mod_to_list/2","anchor":"add_mod_to_list/2"},{"id":"change_mod/1","anchor":"change_mod/1"},{"id":"change_modlist/1","anchor":"change_modlist/1"},{"id":"create_mod/1","anchor":"create_mod/1"},{"id":"create_modlist/1","anchor":"create_modlist/1"},{"id":"create_tag/1","anchor":"create_tag/1"},{"id":"delete_mod/1","anchor":"delete_mod/1"},{"id":"delete_modlist/1","anchor":"delete_modlist/1"},{"id":"get_mod!/1","anchor":"get_mod!/1"},{"id":"get_modlist!/1","anchor":"get_modlist!/1"},{"id":"get_tag!/1","anchor":"get_tag!/1"},{"id":"list_modlists/0","anchor":"list_modlists/0"},{"id":"list_mods/0","anchor":"list_mods/0"},{"id":"list_tags/0","anchor":"list_tags/0"},{"id":"update_mod/2","anchor":"update_mod/2"},{"id":"update_modlist/2","anchor":"update_modlist/2"}]}]},{"id":"Common.Repo","title":"Common.Repo","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"aggregate/4","anchor":"aggregate/4"},{"id":"all/2","anchor":"all/2"},{"id":"checkout/2","anchor":"checkout/2"},{"id":"child_spec/1","anchor":"child_spec/1"},{"id":"config/0","anchor":"config/0"},{"id":"delete/2","anchor":"delete/2"},{"id":"delete!/2","anchor":"delete!/2"},{"id":"delete_all/2","anchor":"delete_all/2"},{"id":"exists?/2","anchor":"exists?/2"},{"id":"get/3","anchor":"get/3"},{"id":"get!/3","anchor":"get!/3"},{"id":"get_by/3","anchor":"get_by/3"},{"id":"get_by!/3","anchor":"get_by!/3"},{"id":"in_transaction?/0","anchor":"in_transaction?/0"},{"id":"init/2","anchor":"init/2"},{"id":"insert/2","anchor":"insert/2"},{"id":"insert!/2","anchor":"insert!/2"},{"id":"insert_all/3","anchor":"insert_all/3"},{"id":"insert_or_update/2","anchor":"insert_or_update/2"},{"id":"insert_or_update!/2","anchor":"insert_or_update!/2"},{"id":"load/2","anchor":"load/2"},{"id":"one/2","anchor":"one/2"},{"id":"one!/2","anchor":"one!/2"},{"id":"preload/3","anchor":"preload/3"},{"id":"query/3","anchor":"query/3"},{"id":"query!/3","anchor":"query!/3"},{"id":"rollback/1","anchor":"rollback/1"},{"id":"start_link/1","anchor":"start_link/1"},{"id":"stop/1","anchor":"stop/1"},{"id":"stream/2","anchor":"stream/2"},{"id":"to_sql/2","anchor":"to_sql/2"},{"id":"transaction/2","anchor":"transaction/2"},{"id":"update/2","anchor":"update/2"},{"id":"update!/2","anchor":"update!/2"},{"id":"update_all/3","anchor":"update_all/3"}]}]},{"id":"Common.Schema.Mod","title":"Common.Schema.Mod","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"change/0","anchor":"t:change/0"},{"id":"id/0","anchor":"t:id/0"},{"id":"t/0","anchor":"t:t/0"},{"id":"unclean_change/0","anchor":"t:unclean_change/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"clean_changes/1","anchor":"clean_changes/1"},{"id":"new/1","anchor":"new/1"},{"id":"preload/1","anchor":"preload/1"}]}]},{"id":"Common.Schema.ModFile","title":"Common.Schema.ModFile","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"t/0","anchor":"t:t/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"changeset/2","anchor":"changeset/2"}]}]},{"id":"Common.Schema.ModTag","title":"Common.Schema.ModTag","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"change/0","anchor":"t:change/0"},{"id":"id/0","anchor":"t:id/0"},{"id":"t/0","anchor":"t:t/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"preload/1","anchor":"preload/1"}]}]},{"id":"Common.Schema.Modlist","title":"Common.Schema.Modlist","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"changes/0","anchor":"t:changes/0"},{"id":"id/0","anchor":"t:id/0"},{"id":"t/0","anchor":"t:t/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"new/1","anchor":"new/1"}]}]},{"id":"Common.Utils","title":"Common.Utils","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"debug/1","anchor":"debug/1"},{"id":"to_bool/1","anchor":"to_bool/1"}]}]},{"id":"Crawler","title":"Crawler","group":""},{"id":"Crawler.Bethesda","title":"Crawler.Bethesda","group":""},{"id":"Crawler.Bethesda.Client","title":"Crawler.Bethesda.Client","group":""},{"id":"Crawler.Client","title":"Crawler.Client","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"args/0","anchor":"t:args/0"},{"id":"result/0","anchor":"t:result/0"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"id":"search/1","anchor":"c:search/1"}]}]},{"id":"Crawler.Nexus","title":"Crawler.Nexus","group":""},{"id":"Crawler.Nexus.Client","title":"Crawler.Nexus.Client","group":""},{"id":"Crawler.Provider","title":"Crawler.Provider","group":"","nodeGroups":[{"key":"callbacks","name":"Callbacks","nodes":[{"id":"search/1","anchor":"c:search/1"},{"id":"search!/1","anchor":"c:search!/1"}]}]},{"id":"Crawler.Steam","title":"Crawler.Steam","group":""},{"id":"Crawler.Steam.Client","title":"Crawler.Steam.Client","group":""},{"id":"Crawler.TaskManager","title":"Crawler.TaskManager","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"max/0","anchor":"t:max/0"},{"id":"start_options/0","anchor":"t:start_options/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"child_spec/1","anchor":"child_spec/1"},{"id":"search/4","anchor":"search/4"},{"id":"start_link/1","anchor":"start_link/1"}]}]},{"id":"TagEditor","title":"TagEditor","group":""},{"id":"TagEditorWeb","title":"TagEditorWeb","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"__using__/1","anchor":"__using__/1"},{"id":"channel/0","anchor":"channel/0"},{"id":"controller/0","anchor":"controller/0"},{"id":"router/0","anchor":"router/0"},{"id":"view/0","anchor":"view/0"}]}]},{"id":"TagEditorWeb.Endpoint","title":"TagEditorWeb.Endpoint","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"broadcast/3","anchor":"broadcast/3"},{"id":"broadcast!/3","anchor":"broadcast!/3"},{"id":"broadcast_from/4","anchor":"broadcast_from/4"},{"id":"broadcast_from!/4","anchor":"broadcast_from!/4"},{"id":"call/2","anchor":"call/2"},{"id":"child_spec/1","anchor":"child_spec/1"},{"id":"config/2","anchor":"config/2"},{"id":"config_change/2","anchor":"config_change/2"},{"id":"host/0","anchor":"host/0"},{"id":"init/1","anchor":"init/1"},{"id":"instrument/3","anchor":"instrument/3"},{"id":"path/1","anchor":"path/1"},{"id":"script_name/0","anchor":"script_name/0"},{"id":"start_link/1","anchor":"start_link/1"},{"id":"static_path/1","anchor":"static_path/1"},{"id":"static_url/0","anchor":"static_url/0"},{"id":"struct_url/0","anchor":"struct_url/0"},{"id":"subscribe/1","anchor":"subscribe/1"},{"id":"subscribe/3","anchor":"subscribe/3"},{"id":"unsubscribe/1","anchor":"unsubscribe/1"},{"id":"url/0","anchor":"url/0"}]}]},{"id":"TagEditorWeb.ErrorHelpers","title":"TagEditorWeb.ErrorHelpers","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"error_tag/2","anchor":"error_tag/2"},{"id":"translate_error/1","anchor":"translate_error/1"}]}]},{"id":"TagEditorWeb.ErrorView","title":"TagEditorWeb.ErrorView","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"__phoenix_recompile__?/0","anchor":"__phoenix_recompile__?/0"},{"id":"__resource__/0","anchor":"__resource__/0"},{"id":"__templates__/0","anchor":"__templates__/0"},{"id":"render/2","anchor":"render/2"},{"id":"template_not_found/2","anchor":"template_not_found/2"}]}]},{"id":"TagEditorWeb.Gettext","title":"TagEditorWeb.Gettext","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"dgettext/3","anchor":"dgettext/3"},{"id":"dgettext_noop/2","anchor":"dgettext_noop/2"},{"id":"dngettext/5","anchor":"dngettext/5"},{"id":"dngettext_noop/3","anchor":"dngettext_noop/3"},{"id":"gettext/2","anchor":"gettext/2"},{"id":"gettext_comment/1","anchor":"gettext_comment/1"},{"id":"gettext_noop/1","anchor":"gettext_noop/1"},{"id":"handle_missing_bindings/2","anchor":"handle_missing_bindings/2"},{"id":"handle_missing_plural_translation/6","anchor":"handle_missing_plural_translation/6"},{"id":"handle_missing_translation/4","anchor":"handle_missing_translation/4"},{"id":"lgettext/4","anchor":"lgettext/4"},{"id":"lngettext/6","anchor":"lngettext/6"},{"id":"ngettext/4","anchor":"ngettext/4"},{"id":"ngettext_noop/2","anchor":"ngettext_noop/2"}]}]},{"id":"TagEditorWeb.LayoutView","title":"TagEditorWeb.LayoutView","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"__phoenix_recompile__?/0","anchor":"__phoenix_recompile__?/0"},{"id":"__resource__/0","anchor":"__resource__/0"},{"id":"__templates__/0","anchor":"__templates__/0"},{"id":"render/2","anchor":"render/2"},{"id":"template_not_found/2","anchor":"template_not_found/2"}]}]},{"id":"TagEditorWeb.ModController","title":"TagEditorWeb.ModController","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"all/2","anchor":"all/2"},{"id":"create/2","anchor":"create/2"},{"id":"delete/2","anchor":"delete/2"},{"id":"new/2","anchor":"new/2"},{"id":"update/2","anchor":"update/2"},{"id":"view/2","anchor":"view/2"}]}]},{"id":"TagEditorWeb.ModListController","title":"TagEditorWeb.ModListController","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"all/2","anchor":"all/2"},{"id":"create/2","anchor":"create/2"},{"id":"delete/2","anchor":"delete/2"},{"id":"new/2","anchor":"new/2"},{"id":"update/2","anchor":"update/2"},{"id":"view/2","anchor":"view/2"}]}]},{"id":"TagEditorWeb.ModListView","title":"TagEditorWeb.ModListView","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"__phoenix_recompile__?/0","anchor":"__phoenix_recompile__?/0"},{"id":"__resource__/0","anchor":"__resource__/0"},{"id":"__templates__/0","anchor":"__templates__/0"},{"id":"render/2","anchor":"render/2"},{"id":"template_not_found/2","anchor":"template_not_found/2"}]}]},{"id":"TagEditorWeb.ModView","title":"TagEditorWeb.ModView","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"__phoenix_recompile__?/0","anchor":"__phoenix_recompile__?/0"},{"id":"__resource__/0","anchor":"__resource__/0"},{"id":"__templates__/0","anchor":"__templates__/0"},{"id":"render/2","anchor":"render/2"},{"id":"render_tags_small/1","anchor":"render_tags_small/1"},{"id":"template_not_found/2","anchor":"template_not_found/2"}]}]},{"id":"TagEditorWeb.PageController","title":"TagEditorWeb.PageController","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"index/2","anchor":"index/2"}]}]},{"id":"TagEditorWeb.PageView","title":"TagEditorWeb.PageView","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"__phoenix_recompile__?/0","anchor":"__phoenix_recompile__?/0"},{"id":"__resource__/0","anchor":"__resource__/0"},{"id":"__templates__/0","anchor":"__templates__/0"},{"id":"render/2","anchor":"render/2"},{"id":"template_not_found/2","anchor":"template_not_found/2"}]}]},{"id":"TagEditorWeb.Router","title":"TagEditorWeb.Router","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"api/2","anchor":"api/2"},{"id":"browser/2","anchor":"browser/2"},{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]}]},{"id":"TagEditorWeb.Router.Helpers","title":"TagEditorWeb.Router.Helpers","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"mod_list_path/2","anchor":"mod_list_path/2"},{"id":"mod_list_path/3","anchor":"mod_list_path/3"},{"id":"mod_list_path/4","anchor":"mod_list_path/4"},{"id":"mod_list_url/2","anchor":"mod_list_url/2"},{"id":"mod_list_url/3","anchor":"mod_list_url/3"},{"id":"mod_list_url/4","anchor":"mod_list_url/4"},{"id":"mod_path/2","anchor":"mod_path/2"},{"id":"mod_path/3","anchor":"mod_path/3"},{"id":"mod_path/4","anchor":"mod_path/4"},{"id":"mod_url/2","anchor":"mod_url/2"},{"id":"mod_url/3","anchor":"mod_url/3"},{"id":"mod_url/4","anchor":"mod_url/4"},{"id":"page_path/2","anchor":"page_path/2"},{"id":"page_path/3","anchor":"page_path/3"},{"id":"page_url/2","anchor":"page_url/2"},{"id":"page_url/3","anchor":"page_url/3"},{"id":"path/2","anchor":"path/2"},{"id":"static_path/2","anchor":"static_path/2"},{"id":"static_url/2","anchor":"static_url/2"},{"id":"tag_path/2","anchor":"tag_path/2"},{"id":"tag_path/3","anchor":"tag_path/3"},{"id":"tag_url/2","anchor":"tag_url/2"},{"id":"tag_url/3","anchor":"tag_url/3"},{"id":"url/1","anchor":"url/1"}]}]},{"id":"TagEditorWeb.TagController","title":"TagEditorWeb.TagController","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"all/2","anchor":"all/2"},{"id":"api_search/2","anchor":"api_search/2"}]}]},{"id":"TagEditorWeb.TagView","title":"TagEditorWeb.TagView","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"__phoenix_recompile__?/0","anchor":"__phoenix_recompile__?/0"},{"id":"__resource__/0","anchor":"__resource__/0"},{"id":"__templates__/0","anchor":"__templates__/0"},{"id":"render/2","anchor":"render/2"},{"id":"template_not_found/2","anchor":"template_not_found/2"}]}]},{"id":"TagEditorWeb.UserSocket","title":"TagEditorWeb.UserSocket","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"connect/3","anchor":"connect/3"},{"id":"id/1","anchor":"id/1"}]}]},{"id":"Website","title":"Website","group":""},{"id":"WebsiteWeb","title":"WebsiteWeb","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"__using__/1","anchor":"__using__/1"},{"id":"channel/0","anchor":"channel/0"},{"id":"controller/0","anchor":"controller/0"},{"id":"router/0","anchor":"router/0"},{"id":"view/0","anchor":"view/0"}]}]},{"id":"WebsiteWeb.Endpoint","title":"WebsiteWeb.Endpoint","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"broadcast/3","anchor":"broadcast/3"},{"id":"broadcast!/3","anchor":"broadcast!/3"},{"id":"broadcast_from/4","anchor":"broadcast_from/4"},{"id":"broadcast_from!/4","anchor":"broadcast_from!/4"},{"id":"call/2","anchor":"call/2"},{"id":"child_spec/1","anchor":"child_spec/1"},{"id":"config/2","anchor":"config/2"},{"id":"config_change/2","anchor":"config_change/2"},{"id":"host/0","anchor":"host/0"},{"id":"init/1","anchor":"init/1"},{"id":"instrument/3","anchor":"instrument/3"},{"id":"path/1","anchor":"path/1"},{"id":"script_name/0","anchor":"script_name/0"},{"id":"start_link/1","anchor":"start_link/1"},{"id":"static_path/1","anchor":"static_path/1"},{"id":"static_url/0","anchor":"static_url/0"},{"id":"struct_url/0","anchor":"struct_url/0"},{"id":"subscribe/1","anchor":"subscribe/1"},{"id":"subscribe/3","anchor":"subscribe/3"},{"id":"unsubscribe/1","anchor":"unsubscribe/1"},{"id":"url/0","anchor":"url/0"}]}]},{"id":"WebsiteWeb.ErrorHelpers","title":"WebsiteWeb.ErrorHelpers","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"error_tag/2","anchor":"error_tag/2"},{"id":"translate_error/1","anchor":"translate_error/1"}]}]},{"id":"WebsiteWeb.ErrorView","title":"WebsiteWeb.ErrorView","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"__phoenix_recompile__?/0","anchor":"__phoenix_recompile__?/0"},{"id":"__resource__/0","anchor":"__resource__/0"},{"id":"__templates__/0","anchor":"__templates__/0"},{"id":"render/2","anchor":"render/2"},{"id":"template_not_found/2","anchor":"template_not_found/2"}]}]},{"id":"WebsiteWeb.Gettext","title":"WebsiteWeb.Gettext","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"dgettext/3","anchor":"dgettext/3"},{"id":"dgettext_noop/2","anchor":"dgettext_noop/2"},{"id":"dngettext/5","anchor":"dngettext/5"},{"id":"dngettext_noop/3","anchor":"dngettext_noop/3"},{"id":"gettext/2","anchor":"gettext/2"},{"id":"gettext_comment/1","anchor":"gettext_comment/1"},{"id":"gettext_noop/1","anchor":"gettext_noop/1"},{"id":"handle_missing_bindings/2","anchor":"handle_missing_bindings/2"},{"id":"handle_missing_plural_translation/6","anchor":"handle_missing_plural_translation/6"},{"id":"handle_missing_translation/4","anchor":"handle_missing_translation/4"},{"id":"lgettext/4","anchor":"lgettext/4"},{"id":"lngettext/6","anchor":"lngettext/6"},{"id":"ngettext/4","anchor":"ngettext/4"},{"id":"ngettext_noop/2","anchor":"ngettext_noop/2"}]}]},{"id":"WebsiteWeb.LayoutView","title":"WebsiteWeb.LayoutView","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"__phoenix_recompile__?/0","anchor":"__phoenix_recompile__?/0"},{"id":"__resource__/0","anchor":"__resource__/0"},{"id":"__templates__/0","anchor":"__templates__/0"},{"id":"render/2","anchor":"render/2"},{"id":"template_not_found/2","anchor":"template_not_found/2"}]}]},{"id":"WebsiteWeb.PageController","title":"WebsiteWeb.PageController","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"index/2","anchor":"index/2"}]}]},{"id":"WebsiteWeb.PageView","title":"WebsiteWeb.PageView","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"__phoenix_recompile__?/0","anchor":"__phoenix_recompile__?/0"},{"id":"__resource__/0","anchor":"__resource__/0"},{"id":"__templates__/0","anchor":"__templates__/0"},{"id":"render/2","anchor":"render/2"},{"id":"template_not_found/2","anchor":"template_not_found/2"}]}]},{"id":"WebsiteWeb.Router","title":"WebsiteWeb.Router","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"browser/2","anchor":"browser/2"},{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]}]},{"id":"WebsiteWeb.Router.Helpers","title":"WebsiteWeb.Router.Helpers","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"page_path/2","anchor":"page_path/2"},{"id":"page_path/3","anchor":"page_path/3"},{"id":"page_url/2","anchor":"page_url/2"},{"id":"page_url/3","anchor":"page_url/3"},{"id":"path/2","anchor":"path/2"},{"id":"static_path/2","anchor":"static_path/2"},{"id":"static_url/2","anchor":"static_url/2"},{"id":"url/1","anchor":"url/1"}]}]},{"id":"WebsiteWeb.UserSocket","title":"WebsiteWeb.UserSocket","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"connect/3","anchor":"connect/3"},{"id":"id/1","anchor":"id/1"}]}]}],"tasks":[]}