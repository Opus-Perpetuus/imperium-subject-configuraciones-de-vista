# Configuraciones de vista

Quien usa la app abre el submenú Configuraciones de vista y ve la tabla de
configuraciones de vista guardadas. Queda probado que la página carga y que el
listado responde.

## Sub-features

La app hace la acción de `listar`. Escribe: no. Esta ficha no lleva línea
`Subject:` con imagen: el catálogo no da un tag para rellenarla. El hueco está
en `despliegue.md`.

- `listar` deja un resultado observable: la página con título
  "Configuraciones de vista" y el `GET` del listado.

### Archivos y contratos

- `src/subject.ts` — `define_subject` de `subject-configuraciones-de-vista`;
  sin `dependsOn`.
- `src/modules/view-config-preset/view-config-preset.routes.ts` — CRUD del
  recurso `view-config-preset`, permiso
  `subject.configuraciones-de-vista.view-config-preset.read`.
- `src/modules/view-config-preset/view-config-preset.pages.ts` — página
  `configuraciones-de-vista.view-config-preset`, path `view-config-preset`,
  listado en `api://m/subject-configuraciones-de-vista/view-config-preset`.

### Mapa

| id | ruta | rol semilla | pasos | esperado | muta | receta |
| --- | --- | --- | --- | --- | --- | --- |
| `subject-configuraciones-de-vista.listar` | `view-config-preset` | sin definir | abrir el submenú Configuraciones de vista | título "Configuraciones de vista" y `GET` del listado en 200 | no | sin definir |

## How to get to it (user POV)

- Menú principal → Configuraciones de vista → Configuraciones de vista
  (path `view-config-preset`).

## Driving it with arnes

Preconditions:

- Doctor en 0. Si falta `subject-configuraciones-de-vista`, la receta sale
  `omitida`.

- **Abrir.** Página `configuraciones-de-vista.view-config-preset` y `GET` del
  listado de `view-config-preset`.
- **Proof.** `evidence/configuraciones-de-vista/`.

## Gotchas

- Una receta de lectura que escribe sale en fallo aunque la pantalla se vea bien.
- Base QA sin definir: ninguna receta muta hasta que esta ficha la nombre.
- `omitida` no cuenta como probada.
