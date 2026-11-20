export const CATALOG_IMAGE_ROOT = 'images/FOTOS SAHM'
export const OPTIMIZED_IMAGE_ROOT = 'images/catalog-optimized'

export const CATALOG_CATEGORY_DATA = [
  {
    id: 'llantas',
    name: 'Llantas',
    nameEn: 'Tires',
    description:
      'Llantas para motos, motos eléctricas y cargueros eléctricos con medidas listas para trabajo diario y reparto.',
    descriptionEn:
      'Tires for motorcycles, electric motorcycles and electric cargo bikes with sizes ready for daily work and delivery.',
    whatsappMessage: 'Hola, quiero consultar llantas SAHM. Mi medida o referencia es: ',
    coverProductId: 'llantas-moto-electrica-350-10-4pr',
    coverImageIndex: 0,
    highlights: ['Motos', 'Moto eléctrica', 'Cargueros eléctricos'],
  },
  {
    id: 'camaras',
    name: 'Cámaras',
    nameEn: 'Tubes',
    description:
      'Cámaras para motos y bicicletas con referencias por medida y válvula para reposición rápida.',
    descriptionEn:
      'Tubes for motorcycles and bicycles with references by size and valve for quick replacement.',
    whatsappMessage: 'Hola, quiero consultar cámaras SAHM. Mi medida o aro es: ',
    coverProductId: 'camaras-motos-400-12-tr13',
    coverImageIndex: 1,
    highlights: ['Cámara de motos', 'Cámara de bicicletas', 'Válvulas TR13 y TR87'],
  },
  {
    id: 'carburadores',
    name: 'Carburadores',
    nameEn: 'Carburetors',
    description:
      'Carburadores PZ para reposición y mantenimiento con fotos de producto y empaque.',
    descriptionEn:
      'PZ carburetors for replacement and maintenance with product and packaging photos.',
    whatsappMessage: 'Hola, quiero consultar carburadores SAHM. La referencia es: ',
    coverProductId: 'carburadores-pz26',
    coverImageIndex: 0,
    highlights: ['PZ19', 'PZ20', 'PZ26', 'PZ27', 'PZ30'],
  },
]

export const CATALOG_COMMERCE_DATA = {
  'llantas-motos-110-90-13-56l': {
    sku: '01130000026',
    brand: 'SAHM',
    measure: '110/90-13',
    classification: '56L',
    tubeType: 'TT',
    unit: 'PZA',
    packageQty: 5,
    retailPrice: 98.4,
    stock: 0,
  },
  'llantas-moto-electrica-250-10-4pr': {
    sku: '01130000025',
    brand: 'SAHM',
    measure: '2.50-10',
    classification: '4PR',
    tubeType: 'TL',
    unit: 'PZA',
    packageQty: 5,
    retailPrice: 38.72,
    stock: 0,
  },
  'llantas-moto-electrica-275-10-4pr': {
    sku: '01070000039',
    brand: 'SAHM',
    displayName: '2.75-10 6PR',
    measure: '2.75-10',
    classification: '6PR',
    tubeType: 'TL',
    unit: 'PZA',
    packageQty: 5,
    retailPrice: 44.8,
    stock: 0,
  },
  'llantas-moto-electrica-300-8-4pr': {
    sku: '01130000030',
    brand: 'SAHM',
    measure: '3.00-8',
    classification: '4PR',
    tubeType: 'TL',
    unit: 'PZA',
    packageQty: 5,
    retailPrice: 41.12,
    stock: 0,
  },
  'llantas-moto-electrica-300-10-6pr': {
    sku: '01130000028',
    brand: 'SAHM',
    measure: '3.00-10',
    classification: '6PR',
    tubeType: 'TL',
    unit: 'PZA',
    packageQty: 5,
    retailPrice: 57.12,
    stock: 0,
  },
  'llantas-moto-electrica-350-10-4pr': {
    sku: '01130000033',
    brand: 'SAHM',
    measure: '3.50-10',
    classification: '4PR',
    tubeType: 'TL',
    unit: 'PZA',
    packageQty: 5,
    retailPrice: 58.4,
    stock: 0,
  },
  'llantas-cargueros-electricos-300-12-4pr': {
    sku: '01130000029',
    brand: 'SAHM',
    measure: '3.00-12',
    classification: '4PR',
    tubeType: 'TT',
    unit: 'PZA',
    packageQty: 10,
    retailPrice: 45.92,
    stock: 425,
  },
  'llantas-cargueros-electricos-350-12-4pr': {
    sku: '01130000034',
    brand: 'SAHM',
    measure: '3.50-12',
    classification: '4PR',
    tubeType: 'TT',
    unit: 'PZA',
    packageQty: 10,
    retailPrice: 67.2,
    stock: 459,
  },
  'llantas-cargueros-electricos-375-12-6pr': {
    sku: '01130000031',
    brand: 'SAHM',
    measure: '3.75-12',
    classification: '6PR',
    tubeType: 'TT',
    unit: 'PZA',
    packageQty: 10,
    retailPrice: 68.64,
    stock: 407,
  },
  'llantas-cargueros-electricos-400-12-8pr': {
    sku: '01130000032',
    brand: 'SAHM',
    measure: '4.00-12',
    classification: '8PR',
    tubeType: 'TT',
    unit: 'PZA',
    packageQty: 2,
    retailPrice: 95.2,
    stock: 248,
  },
  'camaras-motos-110-90-13-tr4': {
    sku: '02030000001',
    brand: 'SAHM',
    measure: '110/90-13',
    classification: 'TR4',
    tubeType: 'Cámara',
    unit: 'PZA',
    packageQty: 30,
    retailPrice: 15.216,
    stock: 0,
  },
  'camaras-motos-300-12-tr87': {
    sku: '02030000002',
    brand: 'SAHM',
    measure: '3.00-12',
    classification: 'TR87',
    tubeType: 'Cámara',
    unit: 'PZA',
    packageQty: 40,
    retailPrice: 11.52,
    stock: 964,
  },
  'camaras-motos-350-12-tr87': {
    sku: '02030000005',
    brand: 'SAHM',
    measure: '3.50-12',
    classification: 'TR87',
    tubeType: 'Cámara',
    unit: 'PZA',
    packageQty: 40,
    retailPrice: 13.12,
    stock: 917,
  },
  'camaras-motos-375-12-tr87': {
    sku: '02030000003',
    brand: 'SAHM',
    measure: '3.75-12',
    classification: 'TR87',
    tubeType: 'Cámara',
    unit: 'PZA',
    packageQty: 40,
    retailPrice: 14.72,
    stock: 861,
  },
  'camaras-motos-400-12-tr13': {
    sku: '02030000004',
    brand: 'SAHM',
    measure: '4.00-12',
    classification: 'TR13',
    tubeType: 'Cámara',
    unit: 'PZA',
    packageQty: 30,
    retailPrice: 15.04,
    stock: 1292,
  },
  'camaras-bicicletas-26x2125235': {
    sku: '02040000001',
    brand: 'SAHM',
    displayName: '26X2.125/2.35 AV48MM',
    measure: '26X2.125/2.35',
    classification: 'AV48MM',
    tubeType: 'Cámara',
    unit: 'PZA',
    packageQty: 50,
    retailPrice: 7.84,
    stock: 0,
  },
  'camaras-bicicletas-29x195235': {
    sku: '02040000002',
    brand: 'SAHM',
    displayName: '29X1.95/2.35 AV48MM',
    measure: '29X1.95/2.35',
    classification: 'AV48MM',
    tubeType: 'Cámara',
    unit: 'PZA',
    packageQty: 50,
    retailPrice: 9.28,
    stock: 0,
  },
  'carburadores-pz19': {
    brand: 'SAHM',
    measure: 'PZ19',
    tubeType: 'Carburador',
    unit: 'Caja',
    retailPrice: 50,
    stock: 0,
  },
  'carburadores-pz20': {
    brand: 'SAHM',
    measure: 'PZ20',
    tubeType: 'Carburador',
    unit: 'Caja',
    retailPrice: 54,
    stock: 0,
  },
  'carburadores-pz26': {
    brand: 'SAHM',
    measure: 'PZ26',
    tubeType: 'Carburador',
    unit: 'Caja',
    retailPrice: 50,
    stock: 0,
  },
  'carburadores-pz27': {
    brand: 'SAHM',
    measure: 'PZ27',
    tubeType: 'Carburador',
    unit: 'Caja',
    retailPrice: 52,
    stock: 0,
  },
  'carburadores-pz30': {
    brand: 'SAHM',
    measure: 'PZ30',
    tubeType: 'Carburador',
    unit: 'Caja',
    retailPrice: 54,
    stock: 0,
  },
}

export const CATALOG_PRODUCT_CONTENT = {
  'carburadores-pz19': {
    seoName: 'Carburador PZ19 19 mm para moto, ATV, scooter y go kart',
    shortDescription: 'Carburador PZ19 de 19 mm para motores 4 tiempos pequeños. Recomendado para 50cc a 125cc según configuración.',
    longDescription:
      'El carburador PZ19 SAHM es una opción práctica para mantenimiento, reposición y calibración de motores 4 tiempos de baja cilindrada. Su diámetro de 19 mm lo hace común en motos pequeñas, scooters, ATV, dirt bikes y go karts que trabajan con referencias PZ. Es una alternativa comercial para talleres, distribuidores y usuarios que necesitan recuperar una alimentación estable de combustible, siempre validando medidas antes de instalar.',
    technicalDetails: [
      ['Modelo', 'PZ19'],
      ['Diámetro de carburador', '19 mm'],
      ['Cilindrada sugerida', '50cc, 70cc, 90cc, 100cc, 110cc y 125cc según configuración'],
      ['Tipo de motor sugerido', '4 tiempos'],
      ['Choke', 'Puede venir con choke por cable según versión'],
      ['Intake ID referencial', '19 mm'],
      ['Montaje de filtro referencial', '33-35 mm aprox.'],
      ['Distancia de pernos referencial', '48 mm aprox.'],
    ],
    compatibility:
      'Compatible según configuración con motos pequeñas, scooter, ATV, dirt bike y go kart con motores 4T de 50cc a 125cc. Validar diámetro de admisión, filtro y distancia entre pernos.',
    benefits: [
      'Medida compacta para motores de baja cilindrada.',
      'Ayuda a recuperar respuesta estable en la alimentación de combustible.',
      'Referencia muy usada en motos chinas, scooters y vehículos recreativos pequeños.',
      'Opción útil para talleres que atienden mantenimiento frecuente.',
    ],
    recommendation:
      'Recomendado para reposición o mantenimiento en motores pequeños cuando el carburador original coincide en admisión, filtro y anclaje. Puede requerir calibración de mezcla y ralentí.',
    technicalWarning:
      'No instalar solo por cilindrada. Verificar medidas antes de instalar: diámetro de admisión, entrada de filtro, distancia entre pernos, tipo de choke y calibración requerida.',
    seoKeywords: [
      'carburador PZ19',
      'carburador 19 mm',
      'carburador para moto 110cc',
      'carburador para scooter',
      'repuestos para motos Perú',
      'carburador ATV go kart',
    ],
    metaDescription: 'Carburador PZ19 19 mm para motores 4T 50cc-125cc según configuración. Verificar medidas antes de instalar.',
    productSheetText:
      'Carburador PZ19 SAHM para motores pequeños 4 tiempos. Ideal para reposición en motos, scooters, ATV y go kart compatibles según configuración. Validar medidas y calibración.',
    faq: [
      ['¿El carburador PZ19 sirve para 110cc?', 'Sí, puede servir en motores 110cc según configuración, pero se debe validar admisión, filtro, pernos y calibración.'],
      ['¿Qué diámetro tiene el PZ19?', 'Tiene diámetro referencial de carburador de 19 mm e intake ID referencial de 19 mm.'],
      ['¿Sirve para scooter o ATV?', 'Puede usarse en scooters, ATV, dirt bikes y go karts compatibles con referencia PZ19.'],
      ['¿Necesita calibración?', 'Sí. Puede requerir ajuste de mezcla, ralentí y revisión de chicleres según el motor.'],
      ['¿Qué debo medir antes de comprar?', 'Diámetro de admisión, montaje del filtro de aire, distancia entre pernos y tipo de choke.'],
    ],
    badges: ['19 mm', '50cc-125cc', '4 tiempos', 'Verificar medidas'],
    comparison: {
      diameter: '19 mm',
      displacement: '50cc-125cc',
      use: 'Motos pequeñas, scooter, ATV y go kart',
      flow: 'Bajo',
      note: 'Compacto; validar choke y pernos.',
    },
  },
  'carburadores-pz20': {
    seoName: 'Carburador PZ20 20 mm para moto 110cc, 125cc, ATV y scooter',
    shortDescription: 'Carburador PZ20 de 20 mm para motores 110cc y 125cc, también 50cc a 125cc según configuración.',
    longDescription:
      'El carburador PZ20 SAHM está orientado a motores 4 tiempos ligeros que requieren una referencia de 20 mm para reposición o mantenimiento. Es usado principalmente en motores 110cc y 125cc, con aplicaciones comunes en ATV, dirt bike, go kart, motos chinas, mototaxis ligeras y scooters. Su instalación debe confirmarse comparando medidas físicas y puede requerir calibración para lograr una respuesta estable.',
    technicalDetails: [
      ['Modelo', 'PZ20'],
      ['Diámetro de carburador', '20 mm'],
      ['Cilindrada sugerida', '110cc y 125cc principalmente; 50cc a 125cc según configuración'],
      ['Tipo de motor sugerido', '4 tiempos'],
      ['Choke', 'Puede venir con choke manual según versión'],
      ['Intake referencial', '20 mm'],
      ['Montaje de filtro referencial', '32 mm aprox.'],
      ['Distancia de pernos referencial', '48 mm aprox.'],
    ],
    compatibility:
      'Compatible según configuración con motos chinas, scooters, mototaxis ligeras, ATV, dirt bike y go kart de baja cilindrada. Validar diámetro de admisión, filtro y distancia entre pernos.',
    benefits: [
      'Flujo ligeramente mayor que PZ19 para motores ligeros.',
      'Referencia común para 110cc y 125cc.',
      'Buena opción para talleres que atienden motos chinas y vehículos utilitarios pequeños.',
      'Ayuda a estabilizar alimentación cuando el carburador anterior está desgastado.',
    ],
    recommendation:
      'Recomendado para motores 110cc y 125cc cuando la medida original coincide. Revisar compatibilidad física y realizar calibración después del montaje.',
    technicalWarning:
      'La compatibilidad no es universal. Validar admisión de 20 mm, montaje del filtro, distancia entre pernos, tipo de choke y calibración de mezcla antes de instalar.',
    seoKeywords: [
      'carburador PZ20',
      'carburador 20 mm',
      'carburador para moto 125cc',
      'carburador para mototaxi ligera',
      'carburador para ATV',
      'repuestos para motos Perú',
    ],
    metaDescription: 'Carburador PZ20 20 mm para motores 110cc y 125cc según configuración. Ideal para motos, ATV y scooter.',
    productSheetText:
      'Carburador PZ20 SAHM de 20 mm para motores 4 tiempos ligeros. Recomendado para 110cc y 125cc según configuración. Verificar medidas y calibrar.',
    faq: [
      ['¿El PZ20 sirve para 125cc?', 'Sí, es usado principalmente en 110cc y 125cc, siempre que las medidas coincidan con el motor.'],
      ['¿Qué diferencia hay entre PZ19 y PZ20?', 'El PZ20 ofrece un diámetro de 20 mm, ligeramente mayor que el PZ19 de 19 mm.'],
      ['¿Puede usarse en mototaxi?', 'Puede servir en mototaxis ligeras según configuración, pero se debe validar admisión, filtro y pernos.'],
      ['¿Viene con choke manual?', 'Puede venir con choke manual según versión del producto. Validar antes de instalar.'],
      ['¿Requiere ajuste técnico?', 'Sí. Es recomendable calibrar mezcla y ralentí después del montaje.'],
    ],
    badges: ['20 mm', '110cc-125cc', 'Choke manual posible', 'Uso ligero'],
    comparison: {
      diameter: '20 mm',
      displacement: '110cc-125cc',
      use: 'Motos chinas, scooters, ATV y mototaxis ligeras',
      flow: 'Bajo-medio',
      note: 'Mayor flujo que PZ19; validar filtro de aire.',
    },
  },
  'carburadores-pz26': {
    seoName: 'Carburador PZ26 26 mm para moto 125cc, 150cc y 200cc',
    shortDescription: 'Carburador PZ26 de 26 mm para motores 125cc, 150cc y 200cc según configuración.',
    longDescription:
      'El carburador PZ26 SAHM ofrece mayor flujo de aire que las referencias PZ19 y PZ20, por lo que se recomienda para motores de cilindrada media según configuración. Es una alternativa para motos lineales, dirt bikes, pit bikes, ATV, go kart y motos chinas que requieren mejor alimentación de mezcla. Su uso debe definirse comparando el carburador original y realizando calibración posterior.',
    technicalDetails: [
      ['Modelo', 'PZ26'],
      ['Diámetro de carburador', '26 mm'],
      ['Cilindrada sugerida', '125cc, 150cc y 200cc según configuración'],
      ['Tipo de motor sugerido', '4 tiempos'],
      ['Nivel de flujo', 'Mayor que PZ19/PZ20'],
      ['Aplicación comercial', 'Motos lineales, ATV, pit bike, dirt bike y go kart'],
    ],
    compatibility:
      'Compatible según configuración con motores 125cc, 150cc y 200cc en motos lineales, motos chinas, ATV, dirt bikes, pit bikes y go kart.',
    benefits: [
      'Mayor flujo de aire frente a PZ19 y PZ20.',
      'Buena opción para motores de cilindrada media.',
      'Puede mejorar respuesta cuando el motor requiere mayor alimentación de mezcla.',
      'Adecuado para uso de trabajo, recreativo y taller mecánico.',
    ],
    recommendation:
      'Recomendado para motores 125cc a 200cc cuando se busca reposición o mejor alimentación según configuración. Validar medidas y calibrar mezcla/ralentí.',
    technicalWarning:
      'Un carburador más grande no siempre mejora el rendimiento. Si el diámetro no corresponde al motor, puede afectar consumo, ralentí o respuesta.',
    seoKeywords: [
      'carburador PZ26',
      'carburador 26 mm',
      'carburador para moto 150cc',
      'carburador para moto 200cc',
      'carburador para pit bike',
      'repuestos para motos Perú',
    ],
    metaDescription: 'Carburador PZ26 26 mm para motores 125cc, 150cc y 200cc según configuración. Mayor flujo que PZ19/PZ20.',
    productSheetText:
      'Carburador PZ26 SAHM de 26 mm para motores medianos. Recomendado para 125cc, 150cc y 200cc según configuración. Validar medidas y calibrar.',
    faq: [
      ['¿Para qué cilindrada se recomienda el PZ26?', 'Se recomienda para 125cc, 150cc y 200cc según configuración del motor.'],
      ['¿Tiene más flujo que PZ20?', 'Sí, el PZ26 ofrece mayor flujo de aire que PZ19 y PZ20.'],
      ['¿Sirve para pit bike o dirt bike?', 'Puede servir en pit bikes y dirt bikes compatibles con medidas PZ26.'],
      ['¿Puedo instalarlo sin calibrar?', 'No es lo ideal. Puede requerir calibración de mezcla, ralentí y chicleres.'],
      ['¿Qué debo validar?', 'Diámetro de admisión, filtro, anclaje, espacio disponible y configuración del motor.'],
    ],
    badges: ['26 mm', '125cc-200cc', 'Mayor flujo', 'Uso taller'],
    comparison: {
      diameter: '26 mm',
      displacement: '125cc-200cc',
      use: 'Motos lineales, pit bike, ATV y go kart',
      flow: 'Medio',
      note: 'Más aire que PZ19/PZ20; requiere buena calibración.',
    },
  },
  'carburadores-pz27': {
    seoName: 'Carburador PZ27 27 mm para moto 150cc, 200cc y algunos 250cc',
    shortDescription: 'Carburador PZ27 de 27 mm para motores 150cc, 200cc y algunos 250cc según configuración.',
    longDescription:
      'El carburador PZ27 SAHM está pensado para motores que requieren mayor alimentación de mezcla y respuesta más firme que referencias pequeñas. Se recomienda para 150cc, 200cc y algunos 250cc dependiendo del motor, con aplicaciones en motos de trabajo, off-road, ATV, pit bike y go kart. Es una pieza técnica que debe elegirse por medidas y configuración, no solo por cilindrada.',
    technicalDetails: [
      ['Modelo', 'PZ27'],
      ['Diámetro de carburador', '27 mm'],
      ['Cilindrada sugerida', '150cc, 200cc y algunos 250cc según configuración'],
      ['Tipo de motor sugerido', '4 tiempos'],
      ['Enfoque', 'Mejor respuesta y mayor alimentación de mezcla'],
      ['Aplicación comercial', 'Motos de trabajo, off-road, ATV, pit bike y go kart'],
    ],
    compatibility:
      'Compatible según configuración con motos de trabajo, off-road, ATV, pit bikes y go karts que usen referencia PZ27 o medidas equivalentes.',
    benefits: [
      'Mayor alimentación de mezcla frente a carburadores más pequeños.',
      'Enfocado en respuesta para motores de trabajo u off-road.',
      'Adecuado para talleres que atienden motos chinas y vehículos recreativos.',
      'Alternativa para motores medianos cuando la configuración lo permite.',
    ],
    recommendation:
      'Recomendado para motores 150cc, 200cc y algunos 250cc cuando el carburador original y las medidas físicas coinciden. Realizar ajuste técnico tras instalar.',
    technicalWarning:
      'Validar antes de comprar. Un PZ27 mal dimensionado puede generar mezcla incorrecta, consumo elevado o respuesta irregular.',
    seoKeywords: [
      'carburador PZ27',
      'carburador 27 mm',
      'carburador para moto 200cc',
      'carburador para moto 250cc',
      'carburador off road',
      'repuestos para motos Perú',
    ],
    metaDescription: 'Carburador PZ27 27 mm para motores 150cc, 200cc y algunos 250cc según configuración. Validar medidas.',
    productSheetText:
      'Carburador PZ27 SAHM de 27 mm para motores de trabajo, off-road, ATV, pit bike y go kart compatibles según configuración.',
    faq: [
      ['¿El PZ27 sirve para 200cc?', 'Sí, puede ser recomendado para 200cc según configuración y medidas del motor.'],
      ['¿Puede servir para 250cc?', 'Puede servir en algunos 250cc, pero se debe validar el carburador original y las medidas.'],
      ['¿Qué mejora frente a PZ26?', 'Ofrece un diámetro ligeramente mayor y puede alimentar más mezcla si el motor lo requiere.'],
      ['¿Es para uso de trabajo?', 'Sí, puede aplicarse en motos de trabajo y off-road compatibles.'],
      ['¿Qué riesgo hay si no coincide?', 'Puede causar mala respuesta, consumo elevado o dificultad de calibración.'],
    ],
    badges: ['27 mm', '150cc-250cc', 'Trabajo/off-road', 'Calibrar'],
    comparison: {
      diameter: '27 mm',
      displacement: '150cc-250cc',
      use: 'Motos de trabajo, off-road, ATV y pit bike',
      flow: 'Medio-alto',
      note: 'Elegir por medidas, no solo por cilindrada.',
    },
  },
  'carburadores-pz30': {
    seoName: 'Carburador PZ30 30 mm para CG125, CG150, CG200, CG250, ATV y dirt bike',
    shortDescription: 'Carburador PZ30 de 30 mm para motores 175cc, 200cc, 250cc y hasta 300cc según configuración.',
    longDescription:
      'El carburador PZ30 SAHM es una referencia de mayor flujo para motores de cilindrada media-alta que requieren más alimentación de aire y combustible. Se usa comúnmente en aplicaciones CG125, CG150, CG175, CG200, CG250, ATV, kart, dirt bike y motos chinas, siempre dependiendo de la configuración real del motor. Es ideal para talleres y usuarios que buscan una reposición robusta, con instalación verificada y calibración profesional.',
    technicalDetails: [
      ['Modelo', 'PZ30'],
      ['Diámetro de carburador', '30 mm'],
      ['Cilindrada sugerida', '175cc, 200cc, 250cc y hasta 300cc según configuración'],
      ['Tipo de motor sugerido', '4 tiempos'],
      ['Nivel de flujo', 'Alto dentro de la serie PZ comercial'],
      ['Aplicaciones referenciales', 'CG125, CG150, CG175, CG200, CG250, ATV, kart, dirt bike y motos chinas'],
    ],
    compatibility:
      'Compatible según configuración con motores CG y motos chinas de mayor cilindrada, ATV, kart y dirt bike. Validar admisión, filtro, pernos, espacio y calibración.',
    benefits: [
      'Mayor flujo de aire para motores de más cilindrada.',
      'Referencia comercial común en aplicaciones CG y motos chinas.',
      'Adecuado para trabajo exigente, off-road y vehículos recreativos.',
      'Buena alternativa para talleres que atienden 200cc, 250cc y configuraciones mayores.',
    ],
    recommendation:
      'Recomendado para 175cc a 250cc y hasta 300cc según configuración. Instalar solo si las medidas coinciden y realizar calibración técnica.',
    technicalWarning:
      'Por su mayor diámetro, requiere especial cuidado en compatibilidad y calibración. Si el motor no demanda ese flujo, puede perder respuesta o consumir más combustible.',
    seoKeywords: [
      'carburador PZ30',
      'carburador 30 mm',
      'carburador CG200',
      'carburador CG250',
      'carburador para moto 250cc',
      'carburador para ATV Perú',
    ],
    metaDescription: 'Carburador PZ30 30 mm para CG125-CG250, ATV, kart y dirt bike. Para 175cc-250cc según configuración.',
    productSheetText:
      'Carburador PZ30 SAHM de 30 mm para motores de mayor cilindrada. Aplicación referencial CG, ATV, kart y dirt bike. Validar medidas y calibrar.',
    faq: [
      ['¿El PZ30 sirve para CG200 o CG250?', 'Puede servir en aplicaciones CG200 y CG250 según configuración, medidas y calibración.'],
      ['¿Para qué cilindrada es recomendado?', 'Se usa comúnmente en 175cc, 200cc y 250cc, y hasta 300cc según configuración.'],
      ['¿Tiene más flujo que PZ27?', 'Sí, el PZ30 tiene mayor diámetro y flujo que PZ27.'],
      ['¿Es ideal para motos chinas?', 'Puede ser una buena opción para motos chinas compatibles, validando medidas antes de instalar.'],
      ['¿Qué pasa si lo instalo en un motor pequeño?', 'Puede afectar respuesta, consumo y calibración si el motor no requiere ese flujo.'],
    ],
    badges: ['30 mm', '175cc-250cc+', 'Alto flujo', 'CG/ATV/kart'],
    comparison: {
      diameter: '30 mm',
      displacement: '175cc-250cc+',
      use: 'CG, ATV, kart, dirt bike y motos chinas',
      flow: 'Alto',
      note: 'Mayor flujo; requiere compatibilidad y calibración cuidadosa.',
    },
  },
  'llantas-motos-110-90-13-56l': {
    seoName: 'Llanta 110/90-13 56L para moto aro 13',
    shortDescription: 'Llanta SAHM 110/90-13 56L con cámara (TT) para motos y scooters urbanos con aro 13.',
    longDescription:
      'La llanta SAHM 110/90-13 56L está pensada para motos y scooters urbanos con aro 13 que se usan a diario en reparto, trabajo y traslados urbanos. La medida 110/90-13 significa 110 mm de ancho de sección, perfil 90 (la altura del flanco es el 90% del ancho) y aro de 13 pulgadas. Su índice 56L indica una capacidad de carga de hasta 224 kg por llanta (índice 56) y una velocidad máxima de 120 km/h (código L). Al ser una llanta TT necesita cámara: en el catálogo SAHM está disponible la Cámara 110/90-13 TR4 de la misma medida.',
    compatibility:
      'Para motos y scooters urbanos con aro 13 que usen la medida 110/90-13. Antes de comprar, revisa la medida impresa en el flanco de tu llanta actual o en el manual del vehículo: la medida y el tipo de llanta (con o sin cámara) deben coincidir.',
    benefits: [
      'Medida 110/90-13 lista para reposición directa en aro 13.',
      'Índice de carga y velocidad 56L (hasta 224 kg y 120 km/h).',
      'Con cámara (TT): reparación sencilla en cualquier taller.',
      'Precio publicado y cotización directa por WhatsApp, con despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la llanta cuando el labrado esté gastado o haya cortes, grietas o deformaciones en el flanco. Mantén la presión que indica el fabricante del vehículo y revísala con la llanta en frío.',
    technicalWarning:
      'No reutilices una cámara dañada o de otra medida con una llanta nueva: la cámara debe ser de la misma medida que la llanta. Una medida distinta a la indicada por el fabricante puede afectar la estabilidad, el frenado y la capacidad de carga.',
    seoKeywords: [
      'llanta 110/90-13',
      'llanta 110/90-13 56L',
      'llanta para moto aro 13',
      'llanta con cámara',
      'llantas para motos Perú',
    ],
    metaDescription: 'Llanta 110/90-13 56L con cámara (TT) para motos y scooters urbanos con aro 13. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Qué significa la medida 110/90-13?', 'Indica 110 mm de ancho de sección, perfil 90 (la altura del flanco es el 90% del ancho) y aro de 13 pulgadas.'],
      ['¿Qué significa 56L?', '56 es el índice de carga (hasta 224 kg por llanta) y L el código de velocidad (hasta 120 km/h).'],
      ['¿Necesita cámara?', 'Sí. Es una llanta TT (con cámara). Te recomendamos la Cámara 110/90-13 TR4 de la misma medida.'],
      ['¿Cómo sé si es mi medida?', 'Revisa los números impresos en el flanco de tu llanta actual. Si tienes dudas, envíanos una foto por WhatsApp y te ayudamos a confirmarla.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp para coordinar el envío.'],
    ],
    badges: ['Aro 13', '56L', 'Con cámara (TT)', 'Moto'],
  },
  'llantas-moto-electrica-250-10-4pr': {
    seoName: 'Llanta 2.50-10 4PR para moto eléctrica aro 10',
    shortDescription: 'Llanta SAHM 2.50-10 4PR sin cámara (tubeless, TL) para motos y scooters eléctricos con aro 10.',
    longDescription:
      'La llanta SAHM 2.50-10 4PR está pensada para motos y scooters eléctricos con aro 10 que se usan a diario en reparto, trabajo y traslados urbanos. La medida 2.50-10 significa 2.50 pulgadas de ancho de sección y aro de 10 pulgadas. Su construcción de 4 lonas (4PR) indica la resistencia de la carcasa: a más lonas, mayor capacidad para soportar peso y golpes. Al ser tubeless (TL) se monta sin cámara, por lo que el aro debe ser apto para llanta sin cámara y llevar válvula tubeless.',
    compatibility:
      'Para motos y scooters eléctricos con aro 10 que usen la medida 2.50-10. Antes de comprar, revisa la medida impresa en el flanco de tu llanta actual o en el manual del vehículo: la medida y el tipo de llanta (con o sin cámara) deben coincidir.',
    benefits: [
      'Medida 2.50-10 lista para reposición directa en aro 10.',
      'Carcasa de 4 lonas (4PR) para trabajo diario.',
      'Tubeless: sin cámara, más simple de mantener en aros compatibles.',
      'Precio publicado y cotización directa por WhatsApp, con despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la llanta cuando el labrado esté gastado o haya cortes, grietas o deformaciones en el flanco. Mantén la presión que indica el fabricante del vehículo y revísala con la llanta en frío.',
    technicalWarning:
      'No montes una llanta tubeless en un aro que no es apto para llanta sin cámara. Una medida distinta a la indicada por el fabricante puede afectar la estabilidad, el frenado y la capacidad de carga.',
    seoKeywords: [
      'llanta 2.50-10',
      'llanta 2.50-10 4PR',
      'llanta para moto eléctrica aro 10',
      'llanta tubeless',
      'llantas para motos Perú',
    ],
    metaDescription: 'Llanta 2.50-10 4PR tubeless para motos y scooters eléctricos con aro 10. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Qué significa la medida 2.50-10?', 'Indica 2.50 pulgadas de ancho de sección y aro de 10 pulgadas.'],
      ['¿Qué significa 4PR?', '4PR es el número de lonas (ply rating): indica la resistencia de la carcasa y su capacidad de carga.'],
      ['¿Necesita cámara?', 'No. Es tubeless (TL): va sin cámara en un aro apto para llanta sin cámara.'],
      ['¿Cómo sé si es mi medida?', 'Revisa los números impresos en el flanco de tu llanta actual. Si tienes dudas, envíanos una foto por WhatsApp y te ayudamos a confirmarla.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp para coordinar el envío.'],
    ],
    badges: ['Aro 10', '4PR', 'Tubeless', 'Moto eléctrica'],
  },
  'llantas-moto-electrica-275-10-4pr': {
    seoName: 'Llanta 2.75-10 6PR para moto eléctrica aro 10',
    shortDescription: 'Llanta SAHM 2.75-10 6PR sin cámara (tubeless, TL) para motos y scooters eléctricos con aro 10.',
    longDescription:
      'La llanta SAHM 2.75-10 6PR está pensada para motos y scooters eléctricos con aro 10 que se usan a diario en reparto, trabajo y traslados urbanos. La medida 2.75-10 significa 2.75 pulgadas de ancho de sección y aro de 10 pulgadas. Su construcción de 6 lonas (6PR) indica la resistencia de la carcasa: a más lonas, mayor capacidad para soportar peso y golpes. Al ser tubeless (TL) se monta sin cámara, por lo que el aro debe ser apto para llanta sin cámara y llevar válvula tubeless.',
    compatibility:
      'Para motos y scooters eléctricos con aro 10 que usen la medida 2.75-10. Antes de comprar, revisa la medida impresa en el flanco de tu llanta actual o en el manual del vehículo: la medida y el tipo de llanta (con o sin cámara) deben coincidir.',
    benefits: [
      'Medida 2.75-10 lista para reposición directa en aro 10.',
      'Carcasa de 6 lonas (6PR) para trabajo diario.',
      'Tubeless: sin cámara, más simple de mantener en aros compatibles.',
      'Precio publicado y cotización directa por WhatsApp, con despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la llanta cuando el labrado esté gastado o haya cortes, grietas o deformaciones en el flanco. Mantén la presión que indica el fabricante del vehículo y revísala con la llanta en frío.',
    technicalWarning:
      'No montes una llanta tubeless en un aro que no es apto para llanta sin cámara. Una medida distinta a la indicada por el fabricante puede afectar la estabilidad, el frenado y la capacidad de carga.',
    seoKeywords: [
      'llanta 2.75-10',
      'llanta 2.75-10 6PR',
      'llanta para moto eléctrica aro 10',
      'llanta tubeless',
      'llantas para motos Perú',
    ],
    metaDescription: 'Llanta 2.75-10 6PR tubeless para motos y scooters eléctricos con aro 10. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Qué significa la medida 2.75-10?', 'Indica 2.75 pulgadas de ancho de sección y aro de 10 pulgadas.'],
      ['¿Qué significa 6PR?', '6PR es el número de lonas (ply rating): indica la resistencia de la carcasa y su capacidad de carga.'],
      ['¿Necesita cámara?', 'No. Es tubeless (TL): va sin cámara en un aro apto para llanta sin cámara.'],
      ['¿Cómo sé si es mi medida?', 'Revisa los números impresos en el flanco de tu llanta actual. Si tienes dudas, envíanos una foto por WhatsApp y te ayudamos a confirmarla.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp para coordinar el envío.'],
    ],
    badges: ['Aro 10', '6PR', 'Tubeless', 'Moto eléctrica'],
  },
  'llantas-moto-electrica-300-8-4pr': {
    seoName: 'Llanta 3.00-8 4PR para moto eléctrica aro 8',
    shortDescription: 'Llanta SAHM 3.00-8 4PR sin cámara (tubeless, TL) para motos y scooters eléctricos con aro 8.',
    longDescription:
      'La llanta SAHM 3.00-8 4PR está pensada para motos y scooters eléctricos con aro 8 que se usan a diario en reparto, trabajo y traslados urbanos. La medida 3.00-8 significa 3.00 pulgadas de ancho de sección y aro de 8 pulgadas. Su construcción de 4 lonas (4PR) indica la resistencia de la carcasa: a más lonas, mayor capacidad para soportar peso y golpes. Al ser tubeless (TL) se monta sin cámara, por lo que el aro debe ser apto para llanta sin cámara y llevar válvula tubeless.',
    compatibility:
      'Para motos y scooters eléctricos con aro 8 que usen la medida 3.00-8. Antes de comprar, revisa la medida impresa en el flanco de tu llanta actual o en el manual del vehículo: la medida y el tipo de llanta (con o sin cámara) deben coincidir.',
    benefits: [
      'Medida 3.00-8 lista para reposición directa en aro 8.',
      'Carcasa de 4 lonas (4PR) para trabajo diario.',
      'Tubeless: sin cámara, más simple de mantener en aros compatibles.',
      'Precio publicado y cotización directa por WhatsApp, con despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la llanta cuando el labrado esté gastado o haya cortes, grietas o deformaciones en el flanco. Mantén la presión que indica el fabricante del vehículo y revísala con la llanta en frío.',
    technicalWarning:
      'No montes una llanta tubeless en un aro que no es apto para llanta sin cámara. Una medida distinta a la indicada por el fabricante puede afectar la estabilidad, el frenado y la capacidad de carga.',
    seoKeywords: [
      'llanta 3.00-8',
      'llanta 3.00-8 4PR',
      'llanta para moto eléctrica aro 8',
      'llanta tubeless',
      'llantas para motos Perú',
    ],
    metaDescription: 'Llanta 3.00-8 4PR tubeless para motos y scooters eléctricos con aro 8. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Qué significa la medida 3.00-8?', 'Indica 3.00 pulgadas de ancho de sección y aro de 8 pulgadas.'],
      ['¿Qué significa 4PR?', '4PR es el número de lonas (ply rating): indica la resistencia de la carcasa y su capacidad de carga.'],
      ['¿Necesita cámara?', 'No. Es tubeless (TL): va sin cámara en un aro apto para llanta sin cámara.'],
      ['¿Cómo sé si es mi medida?', 'Revisa los números impresos en el flanco de tu llanta actual. Si tienes dudas, envíanos una foto por WhatsApp y te ayudamos a confirmarla.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp para coordinar el envío.'],
    ],
    badges: ['Aro 8', '4PR', 'Tubeless', 'Moto eléctrica'],
  },
  'llantas-moto-electrica-300-10-6pr': {
    seoName: 'Llanta 3.00-10 6PR para moto eléctrica aro 10',
    shortDescription: 'Llanta SAHM 3.00-10 6PR sin cámara (tubeless, TL) para motos y scooters eléctricos con aro 10.',
    longDescription:
      'La llanta SAHM 3.00-10 6PR está pensada para motos y scooters eléctricos con aro 10 que se usan a diario en reparto, trabajo y traslados urbanos. La medida 3.00-10 significa 3.00 pulgadas de ancho de sección y aro de 10 pulgadas. Su construcción de 6 lonas (6PR) indica la resistencia de la carcasa: a más lonas, mayor capacidad para soportar peso y golpes. Al ser tubeless (TL) se monta sin cámara, por lo que el aro debe ser apto para llanta sin cámara y llevar válvula tubeless.',
    compatibility:
      'Para motos y scooters eléctricos con aro 10 que usen la medida 3.00-10. Antes de comprar, revisa la medida impresa en el flanco de tu llanta actual o en el manual del vehículo: la medida y el tipo de llanta (con o sin cámara) deben coincidir.',
    benefits: [
      'Medida 3.00-10 lista para reposición directa en aro 10.',
      'Carcasa de 6 lonas (6PR) para trabajo diario.',
      'Tubeless: sin cámara, más simple de mantener en aros compatibles.',
      'Precio publicado y cotización directa por WhatsApp, con despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la llanta cuando el labrado esté gastado o haya cortes, grietas o deformaciones en el flanco. Mantén la presión que indica el fabricante del vehículo y revísala con la llanta en frío.',
    technicalWarning:
      'No montes una llanta tubeless en un aro que no es apto para llanta sin cámara. Una medida distinta a la indicada por el fabricante puede afectar la estabilidad, el frenado y la capacidad de carga.',
    seoKeywords: [
      'llanta 3.00-10',
      'llanta 3.00-10 6PR',
      'llanta para moto eléctrica aro 10',
      'llanta tubeless',
      'llantas para motos Perú',
    ],
    metaDescription: 'Llanta 3.00-10 6PR tubeless para motos y scooters eléctricos con aro 10. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Qué significa la medida 3.00-10?', 'Indica 3.00 pulgadas de ancho de sección y aro de 10 pulgadas.'],
      ['¿Qué significa 6PR?', '6PR es el número de lonas (ply rating): indica la resistencia de la carcasa y su capacidad de carga.'],
      ['¿Necesita cámara?', 'No. Es tubeless (TL): va sin cámara en un aro apto para llanta sin cámara.'],
      ['¿Cómo sé si es mi medida?', 'Revisa los números impresos en el flanco de tu llanta actual. Si tienes dudas, envíanos una foto por WhatsApp y te ayudamos a confirmarla.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp para coordinar el envío.'],
    ],
    badges: ['Aro 10', '6PR', 'Tubeless', 'Moto eléctrica'],
  },
  'llantas-moto-electrica-350-10-4pr': {
    seoName: 'Llanta 3.50-10 4PR para moto eléctrica aro 10',
    shortDescription: 'Llanta SAHM 3.50-10 4PR sin cámara (tubeless, TL) para motos y scooters eléctricos con aro 10.',
    longDescription:
      'La llanta SAHM 3.50-10 4PR está pensada para motos y scooters eléctricos con aro 10 que se usan a diario en reparto, trabajo y traslados urbanos. La medida 3.50-10 significa 3.50 pulgadas de ancho de sección y aro de 10 pulgadas. Su construcción de 4 lonas (4PR) indica la resistencia de la carcasa: a más lonas, mayor capacidad para soportar peso y golpes. Al ser tubeless (TL) se monta sin cámara, por lo que el aro debe ser apto para llanta sin cámara y llevar válvula tubeless.',
    compatibility:
      'Para motos y scooters eléctricos con aro 10 que usen la medida 3.50-10. Antes de comprar, revisa la medida impresa en el flanco de tu llanta actual o en el manual del vehículo: la medida y el tipo de llanta (con o sin cámara) deben coincidir.',
    benefits: [
      'Medida 3.50-10 lista para reposición directa en aro 10.',
      'Carcasa de 4 lonas (4PR) para trabajo diario.',
      'Tubeless: sin cámara, más simple de mantener en aros compatibles.',
      'Precio publicado y cotización directa por WhatsApp, con despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la llanta cuando el labrado esté gastado o haya cortes, grietas o deformaciones en el flanco. Mantén la presión que indica el fabricante del vehículo y revísala con la llanta en frío.',
    technicalWarning:
      'No montes una llanta tubeless en un aro que no es apto para llanta sin cámara. Una medida distinta a la indicada por el fabricante puede afectar la estabilidad, el frenado y la capacidad de carga.',
    seoKeywords: [
      'llanta 3.50-10',
      'llanta 3.50-10 4PR',
      'llanta para moto eléctrica aro 10',
      'llanta tubeless',
      'llantas para motos Perú',
    ],
    metaDescription: 'Llanta 3.50-10 4PR tubeless para motos y scooters eléctricos con aro 10. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Qué significa la medida 3.50-10?', 'Indica 3.50 pulgadas de ancho de sección y aro de 10 pulgadas.'],
      ['¿Qué significa 4PR?', '4PR es el número de lonas (ply rating): indica la resistencia de la carcasa y su capacidad de carga.'],
      ['¿Necesita cámara?', 'No. Es tubeless (TL): va sin cámara en un aro apto para llanta sin cámara.'],
      ['¿Cómo sé si es mi medida?', 'Revisa los números impresos en el flanco de tu llanta actual. Si tienes dudas, envíanos una foto por WhatsApp y te ayudamos a confirmarla.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp para coordinar el envío.'],
    ],
    badges: ['Aro 10', '4PR', 'Tubeless', 'Moto eléctrica'],
  },
  'llantas-cargueros-electricos-300-12-4pr': {
    seoName: 'Llanta 3.00-12 4PR para carguero eléctrico aro 12',
    shortDescription: 'Llanta SAHM 3.00-12 4PR con cámara (TT) para triciclos y cargueros eléctricos con aro 12.',
    longDescription:
      'La llanta SAHM 3.00-12 4PR está pensada para triciclos y cargueros eléctricos con aro 12 que se usan a diario en reparto, trabajo y traslados urbanos. La medida 3.00-12 significa 3.00 pulgadas de ancho de sección y aro de 12 pulgadas. Su construcción de 4 lonas (4PR) indica la resistencia de la carcasa: a más lonas, mayor capacidad para soportar la carga del vehículo. Al ser una llanta TT necesita cámara: en el catálogo SAHM está disponible la Cámara 3.00-12 TR87 de la misma medida.',
    compatibility:
      'Para triciclos y cargueros eléctricos con aro 12 que usen la medida 3.00-12. Antes de comprar, revisa la medida impresa en el flanco de tu llanta actual o en el manual del vehículo: la medida y el tipo de llanta (con o sin cámara) deben coincidir.',
    benefits: [
      'Medida 3.00-12 lista para reposición directa en aro 12.',
      'Carcasa de 4 lonas (4PR) para trabajo diario.',
      'Con cámara (TT): reparación sencilla en cualquier taller.',
      'Precio publicado y cotización directa por WhatsApp, con despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la llanta cuando el labrado esté gastado o haya cortes, grietas o deformaciones en el flanco. Mantén la presión que indica el fabricante del vehículo y revísala con la llanta en frío.',
    technicalWarning:
      'No reutilices una cámara dañada o de otra medida con una llanta nueva: la cámara debe ser de la misma medida que la llanta. Una medida distinta a la indicada por el fabricante puede afectar la estabilidad, el frenado y la capacidad de carga.',
    seoKeywords: [
      'llanta 3.00-12',
      'llanta 3.00-12 4PR',
      'llanta para carguero eléctrico aro 12',
      'llanta con cámara',
      'llantas para motos Perú',
    ],
    metaDescription: 'Llanta 3.00-12 4PR con cámara (TT) para triciclos y cargueros eléctricos con aro 12. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Qué significa la medida 3.00-12?', 'Indica 3.00 pulgadas de ancho de sección y aro de 12 pulgadas.'],
      ['¿Qué significa 4PR?', '4PR es el número de lonas (ply rating): indica la resistencia de la carcasa y su capacidad de carga.'],
      ['¿Necesita cámara?', 'Sí. Es una llanta TT (con cámara). Te recomendamos la Cámara 3.00-12 TR87 de la misma medida.'],
      ['¿Cómo sé si es mi medida?', 'Revisa los números impresos en el flanco de tu llanta actual. Si tienes dudas, envíanos una foto por WhatsApp y te ayudamos a confirmarla.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp para coordinar el envío.'],
    ],
    badges: ['Aro 12', '4PR', 'Con cámara (TT)', 'Carguero eléctrico'],
  },
  'llantas-cargueros-electricos-350-12-4pr': {
    seoName: 'Llanta 3.50-12 4PR para carguero eléctrico aro 12',
    shortDescription: 'Llanta SAHM 3.50-12 4PR con cámara (TT) para triciclos y cargueros eléctricos con aro 12.',
    longDescription:
      'La llanta SAHM 3.50-12 4PR está pensada para triciclos y cargueros eléctricos con aro 12 que se usan a diario en reparto, trabajo y traslados urbanos. La medida 3.50-12 significa 3.50 pulgadas de ancho de sección y aro de 12 pulgadas. Su construcción de 4 lonas (4PR) indica la resistencia de la carcasa: a más lonas, mayor capacidad para soportar la carga del vehículo. Al ser una llanta TT necesita cámara: en el catálogo SAHM está disponible la Cámara 3.50-12 TR87 de la misma medida.',
    compatibility:
      'Para triciclos y cargueros eléctricos con aro 12 que usen la medida 3.50-12. Antes de comprar, revisa la medida impresa en el flanco de tu llanta actual o en el manual del vehículo: la medida y el tipo de llanta (con o sin cámara) deben coincidir.',
    benefits: [
      'Medida 3.50-12 lista para reposición directa en aro 12.',
      'Carcasa de 4 lonas (4PR) para trabajo diario.',
      'Con cámara (TT): reparación sencilla en cualquier taller.',
      'Precio publicado y cotización directa por WhatsApp, con despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la llanta cuando el labrado esté gastado o haya cortes, grietas o deformaciones en el flanco. Mantén la presión que indica el fabricante del vehículo y revísala con la llanta en frío.',
    technicalWarning:
      'No reutilices una cámara dañada o de otra medida con una llanta nueva: la cámara debe ser de la misma medida que la llanta. Una medida distinta a la indicada por el fabricante puede afectar la estabilidad, el frenado y la capacidad de carga.',
    seoKeywords: [
      'llanta 3.50-12',
      'llanta 3.50-12 4PR',
      'llanta para carguero eléctrico aro 12',
      'llanta con cámara',
      'llantas para motos Perú',
    ],
    metaDescription: 'Llanta 3.50-12 4PR con cámara (TT) para triciclos y cargueros eléctricos con aro 12. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Qué significa la medida 3.50-12?', 'Indica 3.50 pulgadas de ancho de sección y aro de 12 pulgadas.'],
      ['¿Qué significa 4PR?', '4PR es el número de lonas (ply rating): indica la resistencia de la carcasa y su capacidad de carga.'],
      ['¿Necesita cámara?', 'Sí. Es una llanta TT (con cámara). Te recomendamos la Cámara 3.50-12 TR87 de la misma medida.'],
      ['¿Cómo sé si es mi medida?', 'Revisa los números impresos en el flanco de tu llanta actual. Si tienes dudas, envíanos una foto por WhatsApp y te ayudamos a confirmarla.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp para coordinar el envío.'],
    ],
    badges: ['Aro 12', '4PR', 'Con cámara (TT)', 'Carguero eléctrico'],
  },
  'llantas-cargueros-electricos-375-12-6pr': {
    seoName: 'Llanta 3.75-12 6PR para carguero eléctrico aro 12',
    shortDescription: 'Llanta SAHM 3.75-12 6PR con cámara (TT) para triciclos y cargueros eléctricos con aro 12.',
    longDescription:
      'La llanta SAHM 3.75-12 6PR está pensada para triciclos y cargueros eléctricos con aro 12 que se usan a diario en reparto, trabajo y traslados urbanos. La medida 3.75-12 significa 3.75 pulgadas de ancho de sección y aro de 12 pulgadas. Su construcción de 6 lonas (6PR) indica la resistencia de la carcasa: a más lonas, mayor capacidad para soportar la carga del vehículo. Al ser una llanta TT necesita cámara: en el catálogo SAHM está disponible la Cámara 3.75-12 TR87 de la misma medida.',
    compatibility:
      'Para triciclos y cargueros eléctricos con aro 12 que usen la medida 3.75-12. Antes de comprar, revisa la medida impresa en el flanco de tu llanta actual o en el manual del vehículo: la medida y el tipo de llanta (con o sin cámara) deben coincidir.',
    benefits: [
      'Medida 3.75-12 lista para reposición directa en aro 12.',
      'Carcasa de 6 lonas (6PR) para trabajo diario.',
      'Con cámara (TT): reparación sencilla en cualquier taller.',
      'Precio publicado y cotización directa por WhatsApp, con despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la llanta cuando el labrado esté gastado o haya cortes, grietas o deformaciones en el flanco. Mantén la presión que indica el fabricante del vehículo y revísala con la llanta en frío.',
    technicalWarning:
      'No reutilices una cámara dañada o de otra medida con una llanta nueva: la cámara debe ser de la misma medida que la llanta. Una medida distinta a la indicada por el fabricante puede afectar la estabilidad, el frenado y la capacidad de carga.',
    seoKeywords: [
      'llanta 3.75-12',
      'llanta 3.75-12 6PR',
      'llanta para carguero eléctrico aro 12',
      'llanta con cámara',
      'llantas para motos Perú',
    ],
    metaDescription: 'Llanta 3.75-12 6PR con cámara (TT) para triciclos y cargueros eléctricos con aro 12. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Qué significa la medida 3.75-12?', 'Indica 3.75 pulgadas de ancho de sección y aro de 12 pulgadas.'],
      ['¿Qué significa 6PR?', '6PR es el número de lonas (ply rating): indica la resistencia de la carcasa y su capacidad de carga.'],
      ['¿Necesita cámara?', 'Sí. Es una llanta TT (con cámara). Te recomendamos la Cámara 3.75-12 TR87 de la misma medida.'],
      ['¿Cómo sé si es mi medida?', 'Revisa los números impresos en el flanco de tu llanta actual. Si tienes dudas, envíanos una foto por WhatsApp y te ayudamos a confirmarla.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp para coordinar el envío.'],
    ],
    badges: ['Aro 12', '6PR', 'Con cámara (TT)', 'Carguero eléctrico'],
  },
  'llantas-cargueros-electricos-400-12-8pr': {
    seoName: 'Llanta 4.00-12 8PR para carguero eléctrico aro 12',
    shortDescription: 'Llanta SAHM 4.00-12 8PR con cámara (TT) para triciclos y cargueros eléctricos con aro 12.',
    longDescription:
      'La llanta SAHM 4.00-12 8PR está pensada para triciclos y cargueros eléctricos con aro 12 que se usan a diario en reparto, trabajo y traslados urbanos. La medida 4.00-12 significa 4.00 pulgadas de ancho de sección y aro de 12 pulgadas. Su construcción de 8 lonas (8PR) indica la resistencia de la carcasa: a más lonas, mayor capacidad para soportar la carga del vehículo. Al ser una llanta TT necesita cámara: en el catálogo SAHM está disponible la Cámara 4.00-12 TR13 de la misma medida.',
    compatibility:
      'Para triciclos y cargueros eléctricos con aro 12 que usen la medida 4.00-12. Antes de comprar, revisa la medida impresa en el flanco de tu llanta actual o en el manual del vehículo: la medida y el tipo de llanta (con o sin cámara) deben coincidir.',
    benefits: [
      'Medida 4.00-12 lista para reposición directa en aro 12.',
      'Carcasa de 8 lonas (8PR) para trabajo diario.',
      'Con cámara (TT): reparación sencilla en cualquier taller.',
      'Precio publicado y cotización directa por WhatsApp, con despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la llanta cuando el labrado esté gastado o haya cortes, grietas o deformaciones en el flanco. Mantén la presión que indica el fabricante del vehículo y revísala con la llanta en frío.',
    technicalWarning:
      'No reutilices una cámara dañada o de otra medida con una llanta nueva: la cámara debe ser de la misma medida que la llanta. Una medida distinta a la indicada por el fabricante puede afectar la estabilidad, el frenado y la capacidad de carga.',
    seoKeywords: [
      'llanta 4.00-12',
      'llanta 4.00-12 8PR',
      'llanta para carguero eléctrico aro 12',
      'llanta con cámara',
      'llantas para motos Perú',
    ],
    metaDescription: 'Llanta 4.00-12 8PR con cámara (TT) para triciclos y cargueros eléctricos con aro 12. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Qué significa la medida 4.00-12?', 'Indica 4.00 pulgadas de ancho de sección y aro de 12 pulgadas.'],
      ['¿Qué significa 8PR?', '8PR es el número de lonas (ply rating): indica la resistencia de la carcasa y su capacidad de carga.'],
      ['¿Necesita cámara?', 'Sí. Es una llanta TT (con cámara). Te recomendamos la Cámara 4.00-12 TR13 de la misma medida.'],
      ['¿Cómo sé si es mi medida?', 'Revisa los números impresos en el flanco de tu llanta actual. Si tienes dudas, envíanos una foto por WhatsApp y te ayudamos a confirmarla.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp para coordinar el envío.'],
    ],
    badges: ['Aro 12', '8PR', 'Con cámara (TT)', 'Carguero eléctrico'],
  },
  'camaras-motos-110-90-13-tr4': {
    seoName: 'Cámara 110/90-13 TR4 para moto aro 13',
    shortDescription: 'Cámara SAHM 110/90-13 con válvula TR4 para llantas de moto con cámara (TT) aro 13.',
    longDescription:
      'La cámara SAHM 110/90-13 es para llantas TT (con cámara) de medida 110/90-13, es decir, 110 mm de ancho de sección, perfil 90 (la altura del flanco es el 90% del ancho) y aro de 13 pulgadas. Viene con válvula TR4. La cámara mantiene el aire dentro de la llanta, por eso es la pieza a cambiar cuando hay pinchazos repetidos, la válvula está dañada o la cámara ya está vieja. En el catálogo SAHM puedes pedirla junto con la Llanta 110/90-13 56L de la misma medida.',
    compatibility:
      'Para llantas TT (con cámara) de medida 110/90-13 en aro 13. Revisa la medida en el flanco de tu llanta y que el agujero de tu aro sea compatible con la válvula TR4.',
    benefits: [
      'Medida 110/90-13 para reposición directa.',
      'Válvula TR4.',
      'Ideal para cambiar junto con la llanta y evitar pinchazos.',
      'Precio publicado y despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la cámara cada vez que cambies la llanta. Al montarla, ínflala un poco antes de colocarla y revisa que no quede pellizcada entre la llanta y el aro.',
    technicalWarning:
      'La cámara debe ser de la misma medida que la llanta: una cámara más grande se pliega y una más pequeña queda estirada y se revienta con facilidad.',
    seoKeywords: [
      'cámara 110/90-13',
      'cámara 110/90-13 tr4',
      'cámara para moto aro 13',
      'válvula tr4',
      'cámaras para moto Perú',
    ],
    metaDescription: 'Cámara 110/90-13 con válvula TR4 para llantas de moto con cámara aro 13. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Para qué llanta sirve la cámara 110/90-13?', 'Para llantas TT (con cámara) de medida 110/90-13. Por ejemplo, la Llanta 110/90-13 56L de nuestro catálogo.'],
      ['¿Qué válvula trae?', 'Trae válvula TR4. Verifica que el agujero de tu aro sea compatible.'],
      ['¿Sirve para una llanta tubeless?', 'Una llanta tubeless no lleva cámara. Esta cámara es para llantas TT (con cámara).'],
      ['¿Cada cuánto se cambia la cámara?', 'Se recomienda cambiarla junto con la llanta o cuando tenga varios parches, fugas o la válvula esté dañada.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp.'],
    ],
    badges: ['Aro 13', 'Válvula TR4', 'Para llanta TT'],
  },
  'camaras-motos-300-12-tr87': {
    seoName: 'Cámara 3.00-12 TR87 para moto aro 12',
    shortDescription: 'Cámara SAHM 3.00-12 con válvula TR87 para llantas de moto con cámara (TT) aro 12.',
    longDescription:
      'La cámara SAHM 3.00-12 es para llantas TT (con cámara) de medida 3.00-12, es decir, 3.00 pulgadas de ancho de sección y aro de 12 pulgadas. Viene con válvula TR87. La cámara mantiene el aire dentro de la llanta, por eso es la pieza a cambiar cuando hay pinchazos repetidos, la válvula está dañada o la cámara ya está vieja. En el catálogo SAHM puedes pedirla junto con la Llanta 3.00-12 4PR de la misma medida.',
    compatibility:
      'Para llantas TT (con cámara) de medida 3.00-12 en aro 12. Revisa la medida en el flanco de tu llanta y que el agujero de tu aro sea compatible con la válvula TR87.',
    benefits: [
      'Medida 3.00-12 para reposición directa.',
      'Válvula TR87.',
      'Ideal para cambiar junto con la llanta y evitar pinchazos.',
      'Precio publicado y despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la cámara cada vez que cambies la llanta. Al montarla, ínflala un poco antes de colocarla y revisa que no quede pellizcada entre la llanta y el aro.',
    technicalWarning:
      'La cámara debe ser de la misma medida que la llanta: una cámara más grande se pliega y una más pequeña queda estirada y se revienta con facilidad.',
    seoKeywords: [
      'cámara 3.00-12',
      'cámara 3.00-12 tr87',
      'cámara para moto aro 12',
      'válvula tr87',
      'cámaras para moto Perú',
    ],
    metaDescription: 'Cámara 3.00-12 con válvula TR87 para llantas de moto con cámara aro 12. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Para qué llanta sirve la cámara 3.00-12?', 'Para llantas TT (con cámara) de medida 3.00-12. Por ejemplo, la Llanta 3.00-12 4PR de nuestro catálogo.'],
      ['¿Qué válvula trae?', 'Trae válvula TR87. Verifica que el agujero de tu aro sea compatible.'],
      ['¿Sirve para una llanta tubeless?', 'Una llanta tubeless no lleva cámara. Esta cámara es para llantas TT (con cámara).'],
      ['¿Cada cuánto se cambia la cámara?', 'Se recomienda cambiarla junto con la llanta o cuando tenga varios parches, fugas o la válvula esté dañada.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp.'],
    ],
    badges: ['Aro 12', 'Válvula TR87', 'Para llanta TT'],
  },
  'camaras-motos-350-12-tr87': {
    seoName: 'Cámara 3.50-12 TR87 para moto aro 12',
    shortDescription: 'Cámara SAHM 3.50-12 con válvula TR87 para llantas de moto con cámara (TT) aro 12.',
    longDescription:
      'La cámara SAHM 3.50-12 es para llantas TT (con cámara) de medida 3.50-12, es decir, 3.50 pulgadas de ancho de sección y aro de 12 pulgadas. Viene con válvula TR87. La cámara mantiene el aire dentro de la llanta, por eso es la pieza a cambiar cuando hay pinchazos repetidos, la válvula está dañada o la cámara ya está vieja. En el catálogo SAHM puedes pedirla junto con la Llanta 3.50-12 4PR de la misma medida.',
    compatibility:
      'Para llantas TT (con cámara) de medida 3.50-12 en aro 12. Revisa la medida en el flanco de tu llanta y que el agujero de tu aro sea compatible con la válvula TR87.',
    benefits: [
      'Medida 3.50-12 para reposición directa.',
      'Válvula TR87.',
      'Ideal para cambiar junto con la llanta y evitar pinchazos.',
      'Precio publicado y despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la cámara cada vez que cambies la llanta. Al montarla, ínflala un poco antes de colocarla y revisa que no quede pellizcada entre la llanta y el aro.',
    technicalWarning:
      'La cámara debe ser de la misma medida que la llanta: una cámara más grande se pliega y una más pequeña queda estirada y se revienta con facilidad.',
    seoKeywords: [
      'cámara 3.50-12',
      'cámara 3.50-12 tr87',
      'cámara para moto aro 12',
      'válvula tr87',
      'cámaras para moto Perú',
    ],
    metaDescription: 'Cámara 3.50-12 con válvula TR87 para llantas de moto con cámara aro 12. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Para qué llanta sirve la cámara 3.50-12?', 'Para llantas TT (con cámara) de medida 3.50-12. Por ejemplo, la Llanta 3.50-12 4PR de nuestro catálogo.'],
      ['¿Qué válvula trae?', 'Trae válvula TR87. Verifica que el agujero de tu aro sea compatible.'],
      ['¿Sirve para una llanta tubeless?', 'Una llanta tubeless no lleva cámara. Esta cámara es para llantas TT (con cámara).'],
      ['¿Cada cuánto se cambia la cámara?', 'Se recomienda cambiarla junto con la llanta o cuando tenga varios parches, fugas o la válvula esté dañada.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp.'],
    ],
    badges: ['Aro 12', 'Válvula TR87', 'Para llanta TT'],
  },
  'camaras-motos-375-12-tr87': {
    seoName: 'Cámara 3.75-12 TR87 para moto aro 12',
    shortDescription: 'Cámara SAHM 3.75-12 con válvula TR87 para llantas de moto con cámara (TT) aro 12.',
    longDescription:
      'La cámara SAHM 3.75-12 es para llantas TT (con cámara) de medida 3.75-12, es decir, 3.75 pulgadas de ancho de sección y aro de 12 pulgadas. Viene con válvula TR87. La cámara mantiene el aire dentro de la llanta, por eso es la pieza a cambiar cuando hay pinchazos repetidos, la válvula está dañada o la cámara ya está vieja. En el catálogo SAHM puedes pedirla junto con la Llanta 3.75-12 6PR de la misma medida.',
    compatibility:
      'Para llantas TT (con cámara) de medida 3.75-12 en aro 12. Revisa la medida en el flanco de tu llanta y que el agujero de tu aro sea compatible con la válvula TR87.',
    benefits: [
      'Medida 3.75-12 para reposición directa.',
      'Válvula TR87.',
      'Ideal para cambiar junto con la llanta y evitar pinchazos.',
      'Precio publicado y despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la cámara cada vez que cambies la llanta. Al montarla, ínflala un poco antes de colocarla y revisa que no quede pellizcada entre la llanta y el aro.',
    technicalWarning:
      'La cámara debe ser de la misma medida que la llanta: una cámara más grande se pliega y una más pequeña queda estirada y se revienta con facilidad.',
    seoKeywords: [
      'cámara 3.75-12',
      'cámara 3.75-12 tr87',
      'cámara para moto aro 12',
      'válvula tr87',
      'cámaras para moto Perú',
    ],
    metaDescription: 'Cámara 3.75-12 con válvula TR87 para llantas de moto con cámara aro 12. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Para qué llanta sirve la cámara 3.75-12?', 'Para llantas TT (con cámara) de medida 3.75-12. Por ejemplo, la Llanta 3.75-12 6PR de nuestro catálogo.'],
      ['¿Qué válvula trae?', 'Trae válvula TR87. Verifica que el agujero de tu aro sea compatible.'],
      ['¿Sirve para una llanta tubeless?', 'Una llanta tubeless no lleva cámara. Esta cámara es para llantas TT (con cámara).'],
      ['¿Cada cuánto se cambia la cámara?', 'Se recomienda cambiarla junto con la llanta o cuando tenga varios parches, fugas o la válvula esté dañada.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp.'],
    ],
    badges: ['Aro 12', 'Válvula TR87', 'Para llanta TT'],
  },
  'camaras-motos-400-12-tr13': {
    seoName: 'Cámara 4.00-12 TR13 para moto aro 12',
    shortDescription: 'Cámara SAHM 4.00-12 con válvula TR13 para llantas de moto con cámara (TT) aro 12.',
    longDescription:
      'La cámara SAHM 4.00-12 es para llantas TT (con cámara) de medida 4.00-12, es decir, 4.00 pulgadas de ancho de sección y aro de 12 pulgadas. Viene con válvula TR13. La cámara mantiene el aire dentro de la llanta, por eso es la pieza a cambiar cuando hay pinchazos repetidos, la válvula está dañada o la cámara ya está vieja. En el catálogo SAHM puedes pedirla junto con la Llanta 4.00-12 8PR de la misma medida.',
    compatibility:
      'Para llantas TT (con cámara) de medida 4.00-12 en aro 12. Revisa la medida en el flanco de tu llanta y que el agujero de tu aro sea compatible con la válvula TR13.',
    benefits: [
      'Medida 4.00-12 para reposición directa.',
      'Válvula TR13.',
      'Ideal para cambiar junto con la llanta y evitar pinchazos.',
      'Precio publicado y despacho a todo el Perú.',
    ],
    recommendation:
      'Cambia la cámara cada vez que cambies la llanta. Al montarla, ínflala un poco antes de colocarla y revisa que no quede pellizcada entre la llanta y el aro.',
    technicalWarning:
      'La cámara debe ser de la misma medida que la llanta: una cámara más grande se pliega y una más pequeña queda estirada y se revienta con facilidad.',
    seoKeywords: [
      'cámara 4.00-12',
      'cámara 4.00-12 tr13',
      'cámara para moto aro 12',
      'válvula tr13',
      'cámaras para moto Perú',
    ],
    metaDescription: 'Cámara 4.00-12 con válvula TR13 para llantas de moto con cámara aro 12. Precio publicado y despacho a todo el Perú. Cotiza por WhatsApp.',
    faq: [
      ['¿Para qué llanta sirve la cámara 4.00-12?', 'Para llantas TT (con cámara) de medida 4.00-12. Por ejemplo, la Llanta 4.00-12 8PR de nuestro catálogo.'],
      ['¿Qué válvula trae?', 'Trae válvula TR13. Verifica que el agujero de tu aro sea compatible.'],
      ['¿Sirve para una llanta tubeless?', 'Una llanta tubeless no lleva cámara. Esta cámara es para llantas TT (con cámara).'],
      ['¿Cada cuánto se cambia la cámara?', 'Se recomienda cambiarla junto con la llanta o cuando tenga varios parches, fugas o la válvula esté dañada.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp.'],
    ],
    badges: ['Aro 12', 'Válvula TR13', 'Para llanta TT'],
  },
  'camaras-bicicletas-26x2125235': {
    seoName: 'Cámara para bicicleta 26x2.125/2.35 válvula Schrader',
    shortDescription: 'Cámara SAHM 26X2.125/2.35 para bicicleta aro 26, con válvula Schrader (AV) de 48 mm.',
    longDescription:
      'La cámara SAHM 26X2.125/2.35 es para bicicletas aro 26 con llantas de 2.125 a 2.35 pulgadas de ancho, un rango habitual en bicicletas de montaña. Trae válvula AV de 48 mm: AV es la válvula Schrader o "tipo auto", la misma de los autos, así que se infla con bombas comunes y en grifos. Es una reposición rápida para ciclistas, tiendas y talleres.',
    compatibility:
      'Para llantas de bicicleta aro 26 con ancho entre 2.125 y 2.35 pulgadas. Revisa la medida en el flanco de tu llanta y que el agujero del aro sea para válvula Schrader (AV).',
    benefits: [
      'Cubre llantas aro 26 de 2.125 a 2.35 pulgadas de ancho.',
      'Válvula Schrader (AV) de 48 mm, compatible con bombas comunes.',
      'Reposición rápida ante pinchazos.',
      'Precio publicado y despacho a todo el Perú.',
    ],
    recommendation:
      'Al instalarla, ínflala un poco antes de montarla y revisa que no quede pellizcada entre la llanta y el aro.',
    technicalWarning:
      'Si tu aro es para válvula Presta (más delgada), esta cámara no entra sin agrandar el agujero del aro.',
    seoKeywords: [
      'cámara 26x2.125',
      'cámara bicicleta aro 26',
      'cámara 26x2.125/2.35',
      'cámara válvula schrader',
      'cámaras de bicicleta Perú',
    ],
    metaDescription: 'Cámara 26X2.125/2.35 para bicicleta aro 26 con válvula Schrader (AV) de 48 mm. Precio publicado y despacho a todo el Perú.',
    faq: [
      ['¿Para qué llantas sirve la 26X2.125/2.35?', 'Para llantas de bicicleta aro 26 con ancho de 2.125 a 2.35 pulgadas.'],
      ['¿Qué significa AV48MM?', 'AV es la válvula Schrader (tipo auto) y 48 mm es el largo de la válvula.'],
      ['¿Sirve para aro con válvula Presta?', 'No directamente: el agujero para válvula Presta es más pequeño que el de una Schrader.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp.'],
    ],
    badges: ['Aro 26', 'Válvula AV 48 mm', 'Bicicleta'],
  },
  'camaras-bicicletas-29x195235': {
    seoName: 'Cámara para bicicleta 29x1.95/2.35 válvula Schrader',
    shortDescription: 'Cámara SAHM 29X1.95/2.35 para bicicleta aro 29, con válvula Schrader (AV) de 48 mm.',
    longDescription:
      'La cámara SAHM 29X1.95/2.35 es para bicicletas aro 29 con llantas de 1.95 a 2.35 pulgadas de ancho, un rango habitual en bicicletas de montaña. Trae válvula AV de 48 mm: AV es la válvula Schrader o "tipo auto", la misma de los autos, así que se infla con bombas comunes y en grifos. Es una reposición rápida para ciclistas, tiendas y talleres.',
    compatibility:
      'Para llantas de bicicleta aro 29 con ancho entre 1.95 y 2.35 pulgadas. Revisa la medida en el flanco de tu llanta y que el agujero del aro sea para válvula Schrader (AV).',
    benefits: [
      'Cubre llantas aro 29 de 1.95 a 2.35 pulgadas de ancho.',
      'Válvula Schrader (AV) de 48 mm, compatible con bombas comunes.',
      'Reposición rápida ante pinchazos.',
      'Precio publicado y despacho a todo el Perú.',
    ],
    recommendation:
      'Al instalarla, ínflala un poco antes de montarla y revisa que no quede pellizcada entre la llanta y el aro.',
    technicalWarning:
      'Si tu aro es para válvula Presta (más delgada), esta cámara no entra sin agrandar el agujero del aro.',
    seoKeywords: [
      'cámara 29x1.95',
      'cámara bicicleta aro 29',
      'cámara 29x1.95/2.35',
      'cámara válvula schrader',
      'cámaras de bicicleta Perú',
    ],
    metaDescription: 'Cámara 29X1.95/2.35 para bicicleta aro 29 con válvula Schrader (AV) de 48 mm. Precio publicado y despacho a todo el Perú.',
    faq: [
      ['¿Para qué llantas sirve la 29X1.95/2.35?', 'Para llantas de bicicleta aro 29 con ancho de 1.95 a 2.35 pulgadas.'],
      ['¿Qué significa AV48MM?', 'AV es la válvula Schrader (tipo auto) y 48 mm es el largo de la válvula.'],
      ['¿Sirve para aro con válvula Presta?', 'No directamente: el agujero para válvula Presta es más pequeño que el de una Schrader.'],
      ['¿Hacen envíos?', 'Sí, despachamos a todo el Perú. Cotiza por WhatsApp.'],
    ],
    badges: ['Aro 29', 'Válvula AV 48 mm', 'Bicicleta'],
  },
}

export const CATALOG_PRODUCT_DATA = [
  {
    id: 'llantas-motos-110-90-13-56l',
    category: 'Llantas',
    subcategory: 'Motos',
    name: '110 90-13  56L',
    files: [
      { file: '11090-13  56L F.jpg', label: 'Frontal' },
      { file: '11090-13  56L L.jpg', label: 'Lateral' },
      { file: '11090-13  56L D.jpg', label: 'Detalle' },
    ],
  },
  {
    id: 'llantas-moto-electrica-250-10-4pr',
    category: 'Llantas',
    subcategory: 'Moto eléctrica',
    name: '2.50-10  4PR',
    files: [
      { file: '2.50-10  4PR F.jpg', label: 'Frontal' },
      { file: '2.50-10  4PR L.jpg', label: 'Lateral' },
      { file: '2.50-10  4PR D.jpg', label: 'Detalle' },
    ],
  },
  {
    id: 'llantas-moto-electrica-275-10-4pr',
    category: 'Llantas',
    subcategory: 'Moto eléctrica',
    name: '2.75-10 4PR',
    files: [
      { file: '2.75-10 4PR F.jpg', label: 'Frontal' },
      { file: '2.75-10 4PR L.jpg', label: 'Lateral' },
      { file: '2.75-10 4PR D.jpg', label: 'Detalle' },
    ],
  },
  {
    id: 'llantas-moto-electrica-300-8-4pr',
    category: 'Llantas',
    subcategory: 'Moto eléctrica',
    name: '3.00-8  4PR',
    files: [
      { file: '3.00-8  4PR F.jpg', label: 'Frontal' },
      { file: '3.00-8  4PR L.jpg', label: 'Lateral' },
      { file: '3.00-8  4PR D.jpg', label: 'Detalle' },
    ],
  },
  {
    id: 'llantas-moto-electrica-300-10-6pr',
    category: 'Llantas',
    subcategory: 'Moto eléctrica',
    name: '3.00-10 6PR',
    files: [
      { file: '3.00-10 6PR F.jpg', label: 'Frontal' },
      { file: '3.00-10 6PR L.jpg', label: 'Lateral' },
      { file: '3.00-10 6PR D.jpg', label: 'Detalle' },
    ],
  },
  {
    id: 'llantas-moto-electrica-350-10-4pr',
    category: 'Llantas',
    subcategory: 'Moto eléctrica',
    name: '3.50-10  4PR',
    files: [
      { file: '3.50-10  4PR F.jpg', label: 'Frontal' },
      { file: '3.50-10  4PR l.jpg', label: 'Lateral' },
      { file: '3.50-10  4PR D.jpg', label: 'Detalle' },
    ],
  },
  {
    id: 'llantas-cargueros-electricos-300-12-4pr',
    category: 'Llantas',
    subcategory: 'Cargueros Eléctricos',
    name: '3.00-12  4PR',
    files: [
      { file: '3.00-12  4PR F.jpg', label: 'Frontal' },
      { file: '3.00-12  4PR L.jpg', label: 'Lateral' },
      { file: '3.00-12  4PR D.jpg', label: 'Detalle' },
    ],
  },
  {
    id: 'llantas-cargueros-electricos-350-12-4pr',
    category: 'Llantas',
    subcategory: 'Cargueros Eléctricos',
    name: '3.50-12  4PR',
    files: [
      { file: '3.50-12  4PR  F.jpg', label: 'Frontal' },
      { file: '3.50-12  4PR  L.jpg', label: 'Lateral' },
      { file: '3.50-12  4PR  D.jpg', label: 'Detalle' },
    ],
  },
  {
    id: 'llantas-cargueros-electricos-375-12-6pr',
    category: 'Llantas',
    subcategory: 'Cargueros Eléctricos',
    name: '3.75-12  6PR',
    files: [
      { file: '3.75-12  6PR F.jpg', label: 'Frontal' },
      { file: '3.75-12  6PR L.jpg', label: 'Lateral' },
      { file: '3.75-12  6PR D.jpg', label: 'Detalle' },
    ],
  },
  {
    id: 'llantas-cargueros-electricos-400-12-8pr',
    category: 'Llantas',
    subcategory: 'Cargueros Eléctricos',
    name: '4.00-12  8PR',
    files: [
      { file: '4.00-12  8PR F.jpg', label: 'Frontal' },
      { file: '4.00-12  8PR L.jpg', label: 'Lateral' },
      { file: '4.00-12  8PR D.jpg', label: 'Detalle' },
    ],
  },
  {
    id: 'camaras-motos-110-90-13-tr4',
    category: 'Cámaras',
    subcategory: 'Cámara de Motos',
    name: '110 90-13 TR4',
    files: [
      { file: '11090-13 TR4.jpg', label: 'Producto' },
      { file: '11090-13 TR4 Cámara.jpg', label: 'Cámara' },
      { file: '11090-13 TR4 Caja.jpg', label: 'Caja' },
    ],
  },
  {
    id: 'camaras-motos-300-12-tr87',
    category: 'Cámaras',
    subcategory: 'Cámara de Motos',
    name: '3.00-12 TR87',
    files: [
      { file: '3.00-12 TR87.jpg', label: 'Producto' },
      { file: '3.00-12 TR87 Cámara.jpg', label: 'Cámara' },
      { file: '3.00-12 TR87 Caja.jpg', label: 'Caja' },
    ],
  },
  {
    id: 'camaras-motos-350-12-tr87',
    category: 'Cámaras',
    subcategory: 'Cámara de Motos',
    name: '3.50-12 TR87',
    files: [
      { file: '3.50-12 TR87.jpg', label: 'Producto' },
      { file: '3.50-12 TR87 Cámara.jpg', label: 'Cámara' },
      { file: '3.50-12 TR87 Caja.jpg', label: 'Caja' },
    ],
  },
  {
    id: 'camaras-motos-375-12-tr87',
    category: 'Cámaras',
    subcategory: 'Cámara de Motos',
    name: '3.75-12 TR87',
    files: [
      { file: '3.75-12 TR87.jpg', label: 'Producto' },
      { file: '3.75-12 TR87 Cámara.jpg', label: 'Cámara' },
      { file: '3.75-12 TR87 Caja.jpg', label: 'Caja' },
    ],
  },
  {
    id: 'camaras-motos-400-12-tr13',
    category: 'Cámaras',
    subcategory: 'Cámara de Motos',
    name: '4.00-12 TR13',
    files: [
      { file: '4.00-12 TR13.JPG', label: 'Producto' },
      { file: '4.00-12 TR13 Cámara.jpg', label: 'Cámara' },
      { file: '4.00-12 TR13 Caja.jpg', label: 'Caja' },
    ],
  },
  {
    id: 'camaras-bicicletas-26x2125235',
    category: 'Cámaras',
    subcategory: 'Cámara de Bicicletas',
    name: '26x2.1252.35',
    files: [
      { file: '26x2.1252.35.jpg', label: 'Producto' },
      { file: '26x2.1252.35 Cámara.jpg', label: 'Cámara' },
      { file: '26x2.1252.35 Caja.jpg', label: 'Caja' },
    ],
  },
  {
    id: 'camaras-bicicletas-29x195235',
    category: 'Cámaras',
    subcategory: 'Cámara de Bicicletas',
    name: '29x1.952.35',
    files: [
      { file: '29x1.952.35.jpg', label: 'Producto' },
      { file: '29x1.952.35 Cámara.jpg', label: 'Cámara' },
      { file: '29x1.952.35 Caja.jpg', label: 'Caja' },
    ],
  },
  {
    id: 'carburadores-pz19',
    category: 'Carburadores',
    subcategory: 'Carburadores',
    name: 'PZ19',
    sourceDir: 'Carburadores/PZ19',
    files: [
      { file: 'Carburador_[PZ19]_SAHM-4.jpg', label: 'Producto' },
      { file: 'Carburador_[PZ19]_SAHM-5.jpg', label: 'Lateral' },
      { file: 'Carburador_[PZ19]_SAHM-6.jpg', label: 'Detalle' },
      { file: 'Carburador_[PZ19]_SAHM-7.jpg', label: 'Angulo' },
      { file: 'Carburador_[PZ19]_SAHM-8.jpg', label: 'Vista 5' },
      { file: 'Carburador_[PZ19]_SAHM-1.jpg', label: 'Vista 6' },
      { file: 'Carburador_[PZ19]_SAHM-2.jpg', label: 'Vista 7' },
      { file: 'Carburador_[PZ19]_SAHM-3.jpg', label: 'Vista 8' },
    ],
  },
  {
    id: 'carburadores-pz20',
    category: 'Carburadores',
    subcategory: 'Carburadores',
    name: 'PZ20',
    sourceDir: 'Carburadores/PZ20',
    files: [
      { file: 'Carburador_[PZ20]_SAHM-7.jpg', label: 'Producto' },
      { file: 'Carburador_[PZ20]_SAHM-9.jpg', label: 'Lateral' },
      { file: 'Carburador_[PZ20]_SAHM-1.jpg', label: 'Detalle' },
      { file: 'Carburador_[PZ20]_SAHM-2.jpg', label: 'Angulo' },
      { file: 'Carburador_[PZ20]_SAHM-3.jpg', label: 'Vista 5' },
      { file: 'Carburador_[PZ20]_SAHM-4.jpg', label: 'Vista 6' },
      { file: 'Carburador_[PZ20]_SAHM-5.jpg', label: 'Vista 7' },
      { file: 'Carburador_[PZ20]_SAHM-6.jpg', label: 'Vista 8' },
    ],
  },
  {
    id: 'carburadores-pz26',
    category: 'Carburadores',
    subcategory: 'Carburadores',
    name: 'PZ26',
    sourceDir: 'Carburadores/PZ26',
    files: [
      { file: 'Carburador_[PZ26]_SAHM-4.jpg', label: 'Producto' },
      { file: 'Carburador_[PZ26]_SAHM-5.jpg', label: 'Lateral' },
      { file: 'Carburador_[PZ26]_SAHM-6.jpg', label: 'Detalle' },
      { file: 'Carburador_[PZ26]_SAHM-7.jpg', label: 'Angulo' },
      { file: 'Carburador_[PZ26]_SAHM-8.jpg', label: 'Vista 5' },
      { file: 'Carburador_[PZ26]_SAHM-1.jpg', label: 'Vista 6' },
      { file: 'Carburador_[PZ26]_SAHM-2.jpg', label: 'Vista 7' },
      { file: 'Carburador_[PZ26]_SAHM-3.jpg', label: 'Vista 8' },
    ],
  },
  {
    id: 'carburadores-pz27',
    category: 'Carburadores',
    subcategory: 'Carburadores',
    name: 'PZ27',
    sourceDir: 'Carburadores/PZ27',
    files: [
      { file: 'Carburador_[PZ27]_SAHM-5.jpg', label: 'Producto' },
      { file: 'Carburador_[PZ27]_SAHM-6.jpg', label: 'Lateral' },
      { file: 'Carburador_[PZ27]_SAHM-8.jpg', label: 'Detalle' },
      { file: 'Carburador_[PZ27]_SAHM-9.jpg', label: 'Angulo' },
      { file: 'Carburador_[PZ27]_SAHM-10.jpg', label: 'Vista 5' },
      { file: 'Carburador_[PZ27]_SAHM-2.jpg', label: 'Vista 6' },
      { file: 'Carburador_[PZ27]_SAHM-3.jpg', label: 'Vista 7' },
      { file: 'Carburador_[PZ27]_SAHM-4.jpg', label: 'Vista 8' },
    ],
  },
  {
    id: 'carburadores-pz30',
    category: 'Carburadores',
    subcategory: 'Carburadores',
    name: 'PZ30',
    sourceDir: 'Carburadores/PZ30',
    files: [
      { file: 'Carburador_[PZ30]_SAHM-2.jpg', label: 'Producto' },
      { file: 'Carburador_[PZ30]_SAHM-3.jpg', label: 'Lateral' },
      { file: 'Carburador_[PZ30]_SAHM-4.jpg', label: 'Detalle' },
      { file: 'Carburador_[PZ30]_SAHM-5.jpg', label: 'Angulo' },
      { file: 'Carburador_[PZ30]_SAHM-6.jpg', label: 'Vista 5' },
      { file: 'Carburador_[PZ30]_SAHM-7.jpg', label: 'Vista 6' },
      { file: 'Carburador_[PZ30]_SAHM-10.jpg', label: 'Vista 7' },
      { file: 'Carburador_[PZ30]_SAHM-1.jpg', label: 'Vista 8' },
    ],
  },
]
