import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const view_config_preset_tables: KirletTableDecl[] = [
  {
    name: "view_config_preset",
    columns: [
      { name: "id", type: "text", primaryKey: true },
      { name: "name", type: "text", notNull: true },
      { name: "description", type: "text" },
      { name: "is_active", type: "boolean", notNull: true, default: true },
      { name: "state", type: "text" },
      { name: "ref", type: "text", unique: true },
      { name: "search_field", type: "text" },
      { name: "created_by", type: "text" },
      { name: "custom_data", type: "json" },
      { name: "payload", type: "json" },
      { name: "created_at", type: "text", notNull: true },
      { name: "updated_at", type: "text", notNull: true },
      { name: "scope", type: "text" },
      { name: "is_template", type: "boolean" },
      { name: "force_locked", type: "boolean" },
      { name: "appearance", type: "json" },
    ],
    indexes: [
      { name: "idx_view_config_preset_name", columns: ["name"] },
      { name: "idx_view_config_preset_active", columns: ["is_active"] },
    ],
  },
];
