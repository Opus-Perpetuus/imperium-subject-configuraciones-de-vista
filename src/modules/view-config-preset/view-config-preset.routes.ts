import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { view_config_preset_pages } from "./view-config-preset.pages.ts";
import { view_config_preset_tables } from "./view-config-preset.tables.ts";

export const view_config_preset_module = define_module({
  resource: "view-config-preset",
  labels: {
    singular: "Configuraciones de vista",
    plural: "Configuraciones de vista",
    read: "Ver Configuraciones de vista",
    write: "Editar Configuraciones de vista",
  },
  routes: define_crud({
    resource: "view-config-preset",
    table: "view_config_preset",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "view-con",
    fields: {
      name: { type: "string", required: true, search: true },
      description: { type: "string", search: true },
      is_active: { type: "boolean" },
      state: { type: "string" },
      ref: { type: "string", search: true },
      search_field: { type: "string", search: true },
      created_by: { type: "string" },
      custom_data: { type: "json" },
      payload: { type: "json" },
      scope: { type: "string", search: true },
      is_template: { type: "boolean" },
      force_locked: { type: "boolean" },
      appearance: { type: "json" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: view_config_preset_tables,
  pages: view_config_preset_pages,
  menu: [
    {
      id: "configuraciones-de-vista.view-config-preset",
      label: "Configuraciones de vista",
      order: 10,
      pageId: "configuraciones-de-vista.view-config-preset",
      path: "view-config-preset",
      permission: "subject.configuraciones-de-vista.view-config-preset.read",
      icon: "document",
    }
    ],
});
