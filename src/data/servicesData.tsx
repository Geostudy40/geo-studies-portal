
import { Layers, Cpu, FileText, HardHat } from 'lucide-react';

interface ServiceData {
  title: string;
  description: string;
  icon: JSX.Element;
  detail: string;
}

export const getServicesData = (language: 'de' | 'en'): ServiceData[] => [
  {
    title: language === 'de' ? "Geotechnische Vorstudien" : "Geotechnical Preliminary Studies",
    description: language === 'de' 
      ? "Umfassende Analyse geologischer, hydrologischer und umweltrelevanter Faktoren durch Deep Research aus multiplen Datenquellen."
      : "Comprehensive analysis of geological, hydrological, and environmental factors through <strong>Deep Research</strong> from multiple data sources.",
    icon: <Layers size={24} />,
    detail: language === 'de'
      ? `"Unsere geologische und hydrologische Bewertung geplanter Bauvorhaben bildet die Grundlage jeder geotechnischen Vorstudie und umfasst:\n\n- Systematische Auswertung geologischer Karten durch kombinierte <strong>ResNet</strong>-basierte <strong>Bilderkennung</strong> und <strong>Graph Neural Networks (GNN)</strong>-Technologie\n- <strong>Deep Research</strong> in amtlichen und privaten Bohrdatenbanken im Umkreis des Projektstandorts\n- Analyse von Satellitenbildern zur Erkennung von Oberflächenveränderungen\n- Auswertung digitaler Geländemodelle zur Identifikation morphologischer Besonderheiten\n- Erstbewertung der Erosions- und Grundwasserverhältnisse des Standorts\n\nOptimierung der Baugrunderkundung und Senkung der Kosten bis 40%! Unsere <strong>KI-gestützte</strong> Methode liefert eine breitere Datenbasis als konventionelle Erkundungen – oft ohne kostenintensive Vorort-Untersuchungen."`
      : `"Our geological and hydrological assessment of planned construction projects forms the foundation of every geotechnical preliminary study and includes:\n\n- Systematic evaluation of geological maps using combined <strong>ResNet</strong>-based <strong>image recognition</strong> and <strong>Graph Neural Networks (GNN)</strong> technology\n- <strong>Deep Research</strong> in official and private drilling databases in the vicinity of the project site\n- Analysis of satellite imagery to detect surface changes\n- Evaluation of digital terrain models to identify morphological features\n- Initial assessment of erosion and groundwater conditions at the site\n\nOptimization of ground investigations and cost reduction up to 40%! Our <strong>AI-supported</strong> method provides a broader database than conventional explorations – often without cost-intensive on-site investigations."`
  },
  {
    title: language === 'de' ? "KI-gestützte Einzelleistungen" : "AI-Supported Individual Services",
    description: language === 'de'
      ? "Durch Einsatz moderner KI-Technologien optimieren wir geotechnische Analysen für maximale Präzision und Kosteneffizienz."
      : "By using modern <strong>AI</strong> technologies, we optimize geotechnical analyses for maximum precision and cost efficiency.",
    icon: <Cpu size={24} />,
    detail: language === 'de'
      ? `"Unsere <strong>KI-gestützten</strong> Leistungen umfassen:\n\n- Geologische Analyse: <strong>ResNet</strong>-basierte <strong>Bilderkennung</strong> und <strong>Graph Neural Networks (GNN)</strong> zur automatischen Identifikation stratigrafischer Schichten. Aus DSM- und LiDAR-Daten generieren wir detaillierte Tektonik-Maps. Alle Ergebnisse werden durch unser Geologen-Team validiert.\n- Automatische Bohrkern-Analyse: <strong>KI</strong>-basierte Bildklassifikation und <strong>Segmentierung</strong> von Bohrkern-Fotos/CT-Scans zur Ermittlung von Bodenklassen, Korngrößenverteilung und Porosität.\n- CPT-Datenauswertung: Vollautomatische Ermittlung von Bodenkennwerten und Tragfähigkeiten (qc/qT-Parameter) mittels <strong>XGBoost-Regression</strong>. <strong>Clusteranalysen</strong> identifizieren Bodenzonen nach standardisierten Verfahren.\n- Erkundungsoptimierung: <strong>Active Learning</strong> zur <strong>KI</strong>-gesteuerten Bohrpunktplanung und Kostenschätzmodelle zur Bewertung verschiedener Bohrstrategien.\n\n<strong>KI</strong> ermöglicht die automatisierte Auswertung großer Datenmengen und macht Erkundungs- und Planungsprozesse effizienter. Die menschliche Expertise bleibt dabei unverzichtbar – unsere Geologen validieren alle <strong>KI-Analyse</strong>-Ergebnisse und entwickeln die Modelle kontinuierlich weiter."`
      : `"Our <strong>AI-supported</strong> services include:\n\n- Geological Analysis: <strong>ResNet</strong>-based <strong>image recognition</strong> and <strong>Graph Neural Networks (GNN)</strong> for automatic identification of stratigraphic layers. We generate detailed tectonic maps from DSM and LiDAR data. All results are validated by our team of geologists.\n- Automated Core Analysis: <strong>AI</strong>-based image classification and <strong>segmentation</strong> of drill core photos/CT scans to determine soil classes, grain size distribution, and porosity.\n- CPT Data Evaluation: Fully automated determination of soil parameters and bearing capacities (qc/qT parameters) using <strong>XGBoost regression</strong>. <strong>Cluster analysis</strong> identify soil zones according to standardized procedures.\n- Exploration Optimization: <strong>Active Learning</strong> for <strong>AI</strong>-controlled drilling point planning and cost estimation models for evaluating different drilling strategies.\n\n<strong>AI</strong> enables automated analysis of large data volumes and makes exploration and planning processes more efficient. Human expertise remains essential – our geologists validate all <strong>AI analysis</strong> results and continuously develop the models."`
  },
  {
    title: language === 'de' ? "Baugrundgutachten und Erkundungsplanung" : "Soil Investigation Reports and Exploration Planning",
    description: language === 'de'
      ? "Nahtlose Überführung von Vorstudien-Ergebnissen in klassische Baugrundgutachten mit optimierter Erkundungstiefe."
      : "Seamless transition from preliminary studies to classic soil investigation reports with optimized exploration depth.",
    icon: <FileText size={24} />,
    detail: language === 'de'
      ? `"Wir bieten DIN- und Eurocode-konforme Baugrundgutachten und optimierte Erkundungsplanung:\n\n- Erstellung klassischer Baugrunderkundungen gem. <strong>DIN EN 1997</strong> und <strong>DIN 4020</strong>, basierend auf Vorabinformationen aus der Vorstudie\n- Optimierung der Erkundungstiefe und -anzahl für maximale Kosteneffizienz im Projekt\n- Erstellung präziser Ausschreibungsunterlagen für Bauleistungen mit fundierter Analyse\n- Effiziente Angebote für geotechnische Projekte durch Integration der <strong>KI-Analyse</strong>-Ergebnisse\n\nUnsere integrierte Methodik bietet entscheidende Vorteile:\n- Keine verlorenen Investitionen: Die Vorstudie fließt direkt in das Baugrundgutachten ein\n- Fokussierte Erkundungsmaßnahmen statt teurer flächendeckender Standarduntersuchungen\n- Normkonforme Gutachten mit zusätzlicher Datentiefe durch <strong>KI-Analyse</strong>\n- Deutliche Reduktion der Gesamtkosten für geotechnische Leistungen im Projektverlauf"`
      : `"We offer DIN and Eurocode-compliant soil investigation reports and optimized exploration planning:\n\n- Preparation of classic soil investigations according to <strong>DIN EN 1997</strong> and <strong>DIN 4020</strong>, based on preliminary information from the pre-study\n- Optimization of exploration depth and number for maximum cost efficiency in the project\n- Creation of precise tender documents for construction services with well-founded analysis\n- Efficient proposals for geotechnical projects through integration of <strong>AI analysis</strong> results\n\nOur integrated methodology offers decisive advantages:\n- No lost investments: The preliminary study flows directly into the soil investigation report\n- Focused exploration measures instead of expensive, comprehensive standard investigations\n- Standards-compliant reports with additional data depth through <strong>AI analysis</strong>\n- Significant reduction of total costs for geotechnical services throughout the project"`
  },
  {
    title: language === 'de' ? "Baufachliche Begleitung" : "Construction Support",
    description: language === 'de'
      ? "KI-gestützte Begleitung der Bauausführungen für Bauunternehmen und Bohrfirmen mit Fokus auf Risikominimierung."
      : "<strong>AI-supported</strong> guidance for construction companies and drilling firms with a focus on risk minimization.",
    icon: <HardHat size={24} />,
    detail: language === 'de'
      ? `"Unsere fachliche Begleitung während der Bauphase bietet praxisnahe Unterstützung:\n\n- Fachliche Begleitung der Bauausführung mit Fokus auf geotechnische Aspekte und kritische Bauphasen\n- Regelmäßige Baustellenbesuche und umfassende Dokumentation der geologischen Verhältnisse\n- <strong>KI-gestützte</strong> Analyse von Abweichungen zwischen Prognose und tatsächlichem Baugrund\n- Lösungsorientierte Beratung bei unerwarteten geologischen Herausforderungen\n- Optimierte Bohrverlaufsplanung bei Wasserbau- und Brunnenbau-Projekten\n\nDiese Dienstleistung bietet entscheidende Vorteile:\n- Reduzierung von Baurisiken und kostenintensiven Überraschungen\n- Schnelle Reaktion bei abweichenden Bodenverhältnissen\n- Technisch fundierte Entscheidungsgrundlagen für Planer und Bauleitung\n- Lückenlose Dokumentation für eventuelle Nachträge und Beweissicherung"`
      : `"Our professional support during the construction phase offers practical assistance:\n\n- Technical supervision of construction with focus on geotechnical aspects and critical construction phases\n- Regular site visits and comprehensive documentation of geological conditions\n- <strong>AI-based</strong> analysis of deviations between predictions and actual subsoil\n- Solution-oriented consulting for unexpected geological challenges\n- Optimized drilling path planning for hydraulic engineering and well construction projects\n\nThis service offers decisive advantages:\n- Reduction of construction risks and cost-intensive surprises\n- Quick response to deviating soil conditions\n- Technically sound decision-making basis for planners and construction management\n- Complete documentation for potential supplements and evidence preservation"`
  }
];
