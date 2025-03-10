const lang = {
    nav: {
        home: 'Inicio',
        features: 'Características',
        pricing: 'Precios',
        developers: 'Desarrolladores',
        purchase: 'Comprar Karhu Anticheat',
    },

    home_hero: {
        name: 'Karhu Anticheat',
        title_start: 'Una solución avanzada de',
        title_highlight: 'anticheat para Minecraft',
        title_end: 'para tu servidor',
        subtitle_start:
            'Solución anticheat para Minecraft ligera, personalizable y confiable para versiones 1.8-1.18. ¡Karhu detecta una gran variedad de trampas incluyendo killaura, reach, speed y mucho más! Prueba Karhu en nuestro servidor',
        subtitle_highlight: 'test.karhu.ac',
        subtitle_end: '¡o compra el paquete de prueba para usarlo en tu propio servidor!',
        button_left: 'Ver nuestros precios',
        button_right: 'Servidor de Discord',
    },

    home_features: {
        title: '¿Qué te ofrecemos?',
        subtitle:
            'El equipo de Karhu quiere ofrecerte la mejor experiencia anticheat a un precio bajo. Todo comenzó con una red que no quería pagar demasiado por un anticheat.',
        list: [
            {
                title: 'Verificaciones avanzadas',
                subtitle:
                    'Nuestras verificaciones intentan simular las acciones del juego Minecraft, con código más simple. Las verificaciones de movimiento no son 100% precisas, pero buscamos buena exactitud.',
            },
            {
                title: 'Soporte rápido',
                subtitle:
                    'Nuestro equipo de soporte es rápido y estará encantado de responder tus preguntas en nuestro Discord.',
            },
            {
                title: 'Ligero',
                subtitle:
                    'Buscamos dejar una marca mínima de uso en el hilo principal. Lo mismo en nuestros propios hilos. Karhu no debería afectar el rendimiento de tu servidor.',
            },
            {
                title: 'Detecciones sigilosas',
                subtitle:
                    'Karhu es muy bueno detectando tramposos sigilosos. Identificando alcances de 3.01 y velocidad horizontal y vertical al 99.99%.',
            },
            {
                title: 'Personalización',
                subtitle:
                    'Karhu te ofrece una gran cantidad de personalización, ya sea el nombre del anticheat o cambiar mensajes.',
            },
            {
                title: 'Basado en paquetes',
                subtitle:
                    'A diferencia de otros anticheats en el mercado, rastreamos acciones con paquetes y no con la API de spigot o eventos de bukkit.',
            },
        ],
    },
    home_pricing: {
        card_plan_includes: 'El plan incluye:',
        card_plan_view_features: 'Ver características',
        card_looking_download_start: '¿Buscas un enlace de descarga?',
        card_looking_download_end: 'Únete a nuestro',
        card_pricing: 'Nuestros precios',
        card_pricing_subtitle:
            'Tenemos precios muy competitivos en comparación con otros anticheats.',

        card1: {
            desc_title_start: 'Listo para detener a los',
            desc_title_highlight: 'tramposos',
            desc_subtitle_start:
                'Queremos ofrecerte una forma económica y confiable de evitar que los tramposos arruinen la experiencia de tus jugadores.',
            desc_subtitle_end:
                'Tus jugadores se sentirán mejor cuando sepan que otros jugadores tampoco están haciendo trampa.',
        },
        card2: {
            title: '¿Aún inseguro? ¡Compra primero la prueba!',
            desc_title: 'Prueba',
            desc_duration: 'Plan de 7 días',
            desc_purchase: 'Comprar plan de prueba',
            price: '5€',
            features: [
                'Una forma de probar Karhu en tu propio servidor sin pagar el precio completo',
                'La misma experiencia premium por tiempo limitado por solo 5€',
            ],
        },
        card3: {
            desc_title: 'Premium',
            desc_duration: 'Plan de por vida',
            desc_purchase: 'Comprar plan premium',
            price: '25€',
            features: [
                'Un total de más de 100 verificaciones',
                'Soporte prioritario',
                'Alta personalización',
                'Actualizaciones constantes',
            ],
        },
    },
    home_sponsor: {
        title: 'Karhu Anticheat x Tietokettu.net',
        subtitle:
            'Tietokettu es un proveedor de hosting ubicado en Finlandia, que ofrece a sus clientes servicios en línea de alta calidad a precios muy económicos. Nuestro hosting es proporcionado por Tietokettu.',
        button: 'Vamos a verlo',
    },
    footer: {
        text: 'Karhu - Proporcionando un servicio anticheat para Minecraft económico y confiable desde 2020. Calidad finlandesa garantizada',
        links_title: 'Enlaces',
        legal_title: 'Legal',
        links: [
            {
                title: 'Inicio',
                url: '/',
            },
            {
                title: 'Características',
                url: '/features',
            },
            {
                title: 'Precios',
                url: '/#pricing',
            },
            {
                title: 'Desarrolladores',
                url: 'https://github.com/Karhu-Anticheat/KarhuAPI',
            },
        ],
        legal: [
            {
                title: 'Términos y Condiciones',
                url: '/terms-of-service',
            },
            {
                title: 'Política de privacidad',
                url: '/privacy-policy',
            },
        ],
        credits_build_by: 'Creado por',
        credits_source_code: 'Código fuente disponible en',
        credits_rights_reserved: 'Todos los derechos reservados',
    },
    features_hero: {
        name: 'Características',
        title_start: 'Tenemos más de',
        title_highlight: '100',
        title_end: 'verificaciones para detectar una gran variedad de trampas',
        subtitle_start:
            'Karhu tiene verificaciones para casi todo tipo de trampas. Ofrece una gama de detecciones y características que van desde la altamente precisa detección de',
        subtitle_highlight: '3.01',
        subtitle_end:
            'de alcance y detección de velocidad hasta verificaciones evidentes imposibles de eludir como velocidad, vuelo, temporizador y más ¡con un impacto mínimo en el rendimiento del servidor! Consulta nuestras configuraciones para ver cómo funciona Karhu.',
        button_left: 'Descargar Checks.yml',
        button_right: 'Descargar Config.yml',
    },
    features_checks: {
        name: 'Nuestras características',
        subtitle:
            'Aquí está la lista de todas nuestras verificaciones. Consulta nuestras configuraciones arriba para características más específicas.',
        checks: [
            {
                category: 'Combate',
                checks: [
                    {
                        title: 'Autoclicker',
                        count: 17,
                        description:
                            'Comprueba errores básicos en clickers + mala aleatorización.',
                    },
                    {
                        title: 'Velocity',
                        count: 2,
                        description:
                            'Detección de velocidad horizontal y vertical al 99.99%.',
                    },
                    {
                        title: 'Reach',
                        count: 1,
                        description: 'Detecta golpes por encima del rango del cliente (3.0).',
                    },
                    {
                        title: 'AimAssist',
                        count: 12,
                        description:
                            'Verificaciones muy básicas para detectar asistencia de apuntado deficiente.',
                    },
                    {
                        title: 'Killaura',
                        count: 13,
                        description:
                            'Las verificaciones detectan autobloqueo, orden de paquetes y keepsprint.',
                    },
                    {
                        title: 'Hitbox',
                        count: 1,
                        description: 'Detecta cualquier expansión de hitbox.',
                    },
                    {
                        title: 'Analysis',
                        count: 5,
                        description:
                            'Análisis heurístico para detectar algunas killauras más avanzadas, todavía puede ser eludido por muchos clientes con la configuración correcta.',
                    },
                ],
            },
            {
                category: 'Movimiento',
                checks: [
                    {
                        title: 'Fly',
                        count: 6,
                        description:
                            'Detecta la mayoría de los hacks de vuelo comprobando si su movimiento sigue la fórmula de gravedad del juego.',
                    },
                    {
                        title: 'Motion',
                        count: 8,
                        description:
                            'Detecta modificaciones en el eje Y en diferentes escenarios.',
                    },
                    {
                        title: 'Speed',
                        count: 3,
                        description:
                            'Detecta casi cualquier movimiento que no siga el movimiento del juego en X y Z.',
                    },
                    {
                        title: 'Omnisprint',
                        count: 1,
                        description: 'Detecta correr hacia atrás con sprint.',
                    },
                    {
                        title: 'Inventory',
                        count: 3,
                        description: 'Detecta hacer clic en el inventario mientras se mueve.',
                    },
                    {
                        title: 'VehicleFly',
                        count: 1,
                        description: 'Detecta volar con vehículos.',
                    },
                    {
                        title: 'Jesus',
                        count: 2,
                        description:
                            'Verificaciones muy básicas que detectan caminar sobre líquidos.',
                    },
                    {
                        title: 'Step',
                        count: 1,
                        description: 'Detecta saltos incorrectos al subir bloques.',
                    },
                ],
            },
            {
                category: 'Jugador',
                checks: [
                    {
                        title: 'Badpackets',
                        count: 6,
                        description:
                            'Detecta paquetes enviados en orden incorrecto o con información ilegal.',
                    },
                    {
                        title: 'Nofall',
                        count: 1,
                        description: 'Detecta la cancelación de daño por caída.',
                    },
                    {
                        title: 'Timer',
                        count: 1,
                        description:
                            'Detecta el envío de paquetes más rápido de lo permitido.',
                    },
                    {
                        title: 'FastEat',
                        count: 1,
                        description: 'Detecta comer más rápido.',
                    },
                    {
                        title: 'FastBow',
                        count: 1,
                        description: 'Detecta disparar arcos más rápido.',
                    },
                    {
                        title: 'FastLadder',
                        count: 1,
                        description: 'Detecta subir escaleras más rápido.',
                    },
                    {
                        title: 'Scaffold',
                        count: 8,
                        description:
                            'Detecta la colocación incorrecta de bloques.',
                    },
                    {
                        title: 'Crasher',
                        count: 1,
                        description:
                            'Evita que los jugadores bloqueen/colapsen tu servidor.',
                    },
                ],
            },
        ],
    },
}

export default lang 