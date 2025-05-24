
export interface ServiceBlockItem {
  title: string;
  description: string;
  details: string[];
  advantages: string[];
  quote: string;
}

export const getServiceBlocks = (language: 'de' | 'en'): ServiceBlockItem[] => {
  return language === 'de' ? [
    {
      title: "Baugrundgutachten und Erkundungsplanung",
      description: "Nahtlose Überführung von Vorstudien-Ergebnissen in klassische Baugrundgutachten mit optimierter Erkundungstiefe.",
      details: [
        "Erstellung klassischer Baugrunderkundungen gem. **DIN EN 1997 und DIN 4020**, basierend auf Vorabinformationen aus der Vorstudie",
        "**Optimierung der Erkundungstiefe und -anzahl** für maximale Kosteneffizienz im Projekt",
        "Erstellung präziser Ausschreibungsunterlagen für Bauleistungen mit fundierter Analyse",
        "Effiziente Angebote für geotechnische Projekte durch **Integration der KI-Analyse-Ergebnisse**"
      ],
      advantages: [
        "Keine verlorenen Investitionen: Die Vorstudie fließt direkt in das **DIN- und Eurocode-konforme Baugrundgutachten** ein",
        "Fokussierte Erkundungsmaßnahmen statt teurer flächendeckender Standarduntersuchungen",
        "Normkonforme Gutachten mit zusätzlicher Datentiefe durch KI-Analyse",
        "Deutliche Reduktion der Gesamtkosten für geotechnische Leistungen im Projektverlauf"
      ],
      quote: "Unsere Baugrundgutachten und Erkundungsplanung bietet eine solide Grundlage für kosteneffiziente und sichere Bauprojekte."
    },
    {
      title: "Baufachliche Begleitung",
      description: "Unsere fachliche Begleitung während der Bauphase bietet praxisnahe Unterstützung:",
      details: [
        "Fachliche Begleitung der Bauausführung mit Fokus auf geotechnische Aspekte und kritische Bauphasen",
        "Regelmäßige Baustellenbesuche und umfassende Dokumentation der geologischen Verhältnisse",
        "**KI-gestützte Analyse von Abweichungen** zwischen Prognose und tatsächlichem Baugrund",
        "Lösungsorientierte Beratung bei unerwarteten geologischen Herausforderungen",
        "**Optimierte Bohrverlaufsplanung** bei Wasserbau- und Brunnenbau-Projekten"
      ],
      advantages: [
        "**Reduzierung von Baurisiken** und kostenintensiven Überraschungen",
        "Schnelle Reaktion bei abweichenden Bodenverhältnissen",
        "Technisch fundierte Entscheidungsgrundlagen für Planer und Bauleitung",
        "Lückenlose Dokumentation für eventuelle Nachfrage und Beweissicherung"
      ],
      quote: "Unsere Baufachliche Begleitung bietet eine solide Grundlage für kosteneffiziente und sichere Bauprojekte."
    }
  ] : [
    {
      title: "Soil Investigation Reports and Exploration Planning",
      description: "Seamless transfer of preliminary study results into classical ground reports with optimized exploration depth.",
      details: [
        "Creation of classical ground investigations according to **DIN EN 1997 and DIN 4020**, based on preliminary information from the preliminary study",
        "**Optimization of exploration depth and number** for maximum cost efficiency in the project",
        "Creation of precise tender documents for construction services with well-founded analysis",
        "Efficient offers for geotechnical projects through **Integration of AI analysis results**"
      ],
      advantages: [
        "No lost investments: The preliminary study flows directly into the **DIN and Eurocode-compliant soil investigation report**",
        "Focused exploration measures instead of expensive area-wide standard investigations",
        "Standards-compliant reports with additional data depth through AI analysis",
        "Significant reduction of total costs for geotechnical services in the project"
      ],
      quote: "Our soil investigation reports and exploration planning provide a solid foundation for cost-efficient and safe construction projects."
    },
    {
      title: "Construction Support",
      description: "Our technical support during the construction phase offers practical assistance:",
      details: [
        "Technical support for construction execution focusing on geotechnical aspects and critical construction phases",
        "Regular site visits and comprehensive documentation of geological conditions",
        "**AI-supported analysis of deviations** between prediction and actual ground conditions",
        "Solution-oriented consultation for unexpected geological challenges",
        "**Optimized drilling path planning** for hydraulic engineering and well construction projects"
      ],
      advantages: [
        "**Reduction of construction risks** and cost-intensive surprises",
        "Quick reaction to deviating soil conditions",
        "Technically sound decision bases for planners and construction management",
        "Complete documentation for possible inquiries and evidence preservation"
      ],
      quote: "Our construction support provides a solid foundation for cost-efficient and safe construction projects."
    }
  ];
};
