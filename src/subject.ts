import { define_subject } from "@opus-perpetuus/imperium-core-kit";
import pkg from "../package.json" with { type: "json" };
import { view_config_preset_module } from "./modules/view-config-preset/view-config-preset.routes.ts";
import { seed_demo } from "./seed.ts";

export const SUBJECT = define_subject({
  id: "SUBJECT-configuraciones-de-vista",
  name: "Configuraciones de vista",
  version: pkg.version,
  image: `ghcr.io/opus-perpetuus/subject-configuraciones-de-vista:${pkg.version}`,
  compat: { nox: ">=0.5.0", kit: "^0.5.0" },
  schema_version: 1,
  menu_root: {
    id: "configuraciones-de-vista.root",
    label: "Configuraciones de vista",
    order: 0,
  },
  modules: [view_config_preset_module],
  seed: seed_demo,
});

export const KIRLET = SUBJECT;
