export const CATEGORIES = [
  {
    id: 'llantas',
    catalogName: 'Llantas',
    name: 'Llantas',
    description: 'Llantas para moto, moto eléctrica y cargueros eléctricos según medida y uso.',
    cta: 'Ver catálogo de llantas',
    waMessage: 'Hola, quiero cotizar llantas SAHM. Mi medida o referencia es: ',
    enabled: true,
  },
  {
    id: 'camaras',
    catalogName: 'Cámaras',
    name: 'Cámaras',
    description: 'Cámaras para moto en diferentes medidas, ideales para reposición rápida y segura.',
    cta: 'Ver catálogo de cámaras',
    waMessage: 'Hola, quiero cotizar cámaras SAHM. Mi medida o referencia es: ',
    enabled: true,
  },
  {
    id: 'carburadores',
    catalogName: 'Carburadores',
    name: 'Carburadores',
    description: 'Carburadores PZ para reposición y mantenimiento según referencia.',
    cta: 'Ver catálogo de carburadores',
    waMessage: 'Hola, quiero cotizar carburadores SAHM. La referencia es: ',
    enabled: true,
  },
  {
    id: 'repuestos',
    catalogName: 'Repuestos',
    name: 'Repuestos',
    description: 'Repuestos seleccionados para mantenimiento, reparación y funcionamiento.',
    cta: 'Ver catálogo de repuestos',
    waMessage: 'Hola, quiero cotizar repuestos SAHM. La pieza o referencia es: ',
    enabled: false,
  },
  {
    id: 'accesorios',
    catalogName: 'Accesorios',
    name: 'Accesorios',
    description: 'Productos complementarios para cuidado, seguridad y mantenimiento.',
    cta: 'Ver accesorios',
    waMessage: 'Hola, quiero cotizar accesorios SAHM. El producto o referencia es: ',
    enabled: false,
  },
]

export function getCategoryById(id) {
  return CATEGORIES.find(cat => cat.id === id && cat.enabled)
}
