import type { KirletDataClient, NoxServices } from "@opus-perpetuus/imperium-core-kit";
import { new_id, now_iso } from "@opus-perpetuus/imperium-core-kit";

export async function seed_demo(ctx: {
  data: KirletDataClient;
  nox: NoxServices;
  technical_id: string;
}): Promise<void> {
  const n = await ctx.data.count("view_config_preset");
  if (n > 0) return;
  const ts = now_iso();
  await ctx.data.insert("view_config_preset", {
    id: new_id("view-con"),
    name: "Configuraciones de vista (ejemplo)",
    description: "Registro semilla de la app. Sustituye al migrar desde Mongo.",
    is_active: true,
    ref: "seed-configuraciones-de-vista",
    created_at: ts,
    updated_at: ts,
  });
}
