import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-configuraciones-de-vista";

export const view_config_preset_pages: KirletPageDecl[] = [
  {
    id: "configuraciones-de-vista.view-config-preset",
    path: "view-config-preset",
    permission: "subject.configuraciones-de-vista.view-config-preset.read",
    build: () =>
      build_feature_shell_page({
        id: "configuraciones-de-vista.view-config-preset",
        owner: "subject-configuraciones-de-vista",
        title: "Configuraciones de vista",
        props: {
          basePath: "view-config-preset",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Configuraciones de vista",
            subtitle: "Submenú de configuraciones-de-vista",
            pluralLabel: "configuraciones de vista",
            singularLabel: "configuraciones de vista",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/view-config-preset`,
            record: `${API}/view-config-preset/:id`,
            create: { method: "POST", action: `${API}/view-config-preset` },
            update: { method: "PATCH", action: `${API}/view-config-preset/:id` },
            delete: { method: "DELETE", action: `${API}/view-config-preset/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "scope", label: "scope", sortable: true, priority: 3 },
              { key: "is_template", label: "is template", sortable: true, priority: 3 },
              { key: "force_locked", label: "force locked", sortable: true, priority: 3 },
              { key: "appearance", label: "appearance", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "scope", component: "input-text", label: "scope" },
              { name: "is_template", component: "input-checkbox", label: "is template" },
              { name: "force_locked", component: "input-checkbox", label: "force locked" },
              { name: "appearance", component: "input-json", label: "appearance" },
            ],
          },
        },
      }),
  },
];
