
import { Layers, Cpu, FileText, HardHat } from 'lucide-react';

interface ServiceData {
  title: string;
  description: string;
  icon: JSX.Element;
  detail: string;
}

export const getServicesData = (language: 'de' | 'en'): ServiceData[] => {
  console.log('[servicesData] Getting services data for language:', language);
  
  try {
    const data = [
      {
        title: language === 'de' ? "Geotechnische Vorstudien" : "Geotechnical Preliminary Studies",
        description: language === 'de' 
          ? "Umfassende Analyse geologischer, hydrologischer und umweltrelevanter Faktoren durch <strong>Deep Research</strong> aus multiplen Datenquellen."
          : "Comprehensive analysis of geological, hydrological, and environmental factors through <strong>Deep Research</strong> from multiple data sources.",
        icon: <Layers size={24} />,
        detail: language === 'de'
          ? `<span class="font-bold text-lg text-geoblue-800 block mb-3">Unsere geologische und hydrologische Bewertung geplanter Bauvorhaben bildet die Grundlage jeder geotechnischen Vorstudie und umfasst:</span><br>• Systematische Auswertung geologischer Karten durch kombinierte <strong>ResNet</strong>-basierte <strong>Bilderkennung</strong> und <strong>Graph Neural Networks (GNN)</strong>-Technologie<br>• <strong>Deep Research</strong> in amtlichen und privaten Bohrdatenbanken im Umkreis des Projektstandorts<br>• Analyse von Satellitenbildern zur Erkennung von Oberflächenveränderungen<br>• Auswertung digitaler Geländemodelle zur Identifikation morphologischer Besonderheiten<br>• Erstbewertung der Erosions- und Grundwasserverhältnisse des Standorts<br><br>Optimierung der Baugrunderkundung und Senkung der Kosten bis 40%! Unsere <strong>KI-gestützte</strong> Methode liefert eine breitere Datenbasis als konventionelle Erkundungen – oft ohne kostenintensive Vorort-Untersuchungen.`
          : `<span class="font-bold text-lg text-geoblue-800 block mb-3">Our geological and hydrological assessment of planned construction projects forms the foundation of every geotechnical preliminary study and includes:</span><br>• Systematic evaluation of geological maps using combined <strong>ResNet</strong>-based <strong>image recognition</strong> and <strong>Graph Neural Networks (GNN)</strong> technology<br>• <strong>Deep Research</strong> in official and private drilling databases in the vicinity of the project site<br>• Analysis of satellite imagery to detect surface changes<br>• Evaluation of digital terrain models to identify morphological features<br>• Initial assessment of erosion and groundwater conditions at the site<br><br>Optimization of ground investigations and cost reduction up to 40%! Our <strong>AI-supported</strong> method provides a broader database than conventional explorations – often without cost-intensive on-site investigations.`
      },
      {
        title: language === 'de' ? "KI-gestützte Einzelleistungen" : "AI-Supported Individual Services",
        description: language === 'de'
          ? "Durch Einsatz moderner <strong>KI</strong>-Technologien optimieren wir geotechnische Analysen für maximale Präzision und Kosteneffizienz."
          : "By using modern <strong>AI</strong> technologies, we optimize geotechnical analyses for maximum precision and cost efficiency.",
        icon: <Cpu size={24} />,
        detail: language === 'de'
          ? `<span class="font-bold text-lg text-geoblue-800 block mb-3">Unsere KI-gestützten Leistungen umfassen:</span><br>• Geologische Analyse: <strong>ResNet</strong>-basierte <strong>Bilderkennung</strong> und <strong>Graph Neural Networks (GNN)</strong> zur automatischen Identifikation stratigrafischer Schichten. Aus DSM- und LiDAR-Daten generieren wir detaillierte Tektonik-Maps. Alle Ergebnisse werden durch unser Geologen-Team validiert.<br>• Automatische Bohrkern-Analyse: <strong>KI</strong>-basierte Bildklassifikation und <strong>Segmentierung</strong> von Bohrkern-Fotos/CT-Scans zur Ermittlung von Bodenklassen, Korngrößenverteilung und Porosität.<br>• CPT-Datenauswertung: Vollautomatische Ermittlung von Bodenkennwerten und Tragfähigkeiten (qc/qT-Parameter) mittels <strong>XGBoost-Regression</strong>. <strong>Clusteranalysen</strong> identifizieren Bodenzonen nach standardisierten Verfahren.<br>• Erkundungsoptimierung: <strong>Active Learning</strong> zur <strong>KI</strong>-gesteuerten Bohrpunktplanung und Kostenschätzmodelle zur Bewertung verschiedener Bohrstrategien.<br><br><strong>KI</strong> ermöglicht die automatisierte Auswertung großer Datenmengen und macht Erkundungs- und Planungsprozesse effizienter. Die menschliche Expertise bleibt dabei unverzichtbar – unsere Geologen validieren alle <strong>KI-Analyse</strong>-Ergebnisse und entwickeln die Modelle kontinuierlich weiter.`
          : `<span class="font-bold text-lg text-geoblue-800 block mb-3">Our AI-supported services include:</span><br>• Geological Analysis: <strong>ResNet</strong>-based <strong>image recognition</strong> and <strong>Graph Neural Networks (GNN)</strong> for automatic identification of stratigraphic layers. We generate detailed tectonic maps from DSM and LiDAR data. All results are validated by our team of geologists.<br>• Automated Core Analysis: <strong>AI</strong>-based image classification and <strong>segmentation</strong> of drill core photos/CT scans to determine soil classes, grain size distribution, and porosity.<br>• CPT Data Evaluation: Fully automated determination of soil parameters and bearing capacities (qc/qT parameters) using <strong>XGBoost regression</strong>. <strong>Cluster analysis</strong> identify soil zones according to standardized procedures.<br>• Exploration Optimization: <strong>Active Learning</strong> for <strong>AI</strong>-controlled drilling point planning and cost estimation models for evaluating different drilling strategies.<br><br><strong>AI</strong> enables automated analysis of large data volumes and makes exploration and planning processes more efficient. Human expertise remains essential – our geologists validate all <strong>AI analysis</strong> results and continuously develop the models.`
      },
      {
        title: language === 'de' ? "Baugrundgutachten und Erkundungsplanung" : "Soil Investigation Reports and Exploration Planning",
        description: language === 'de'
          ? "Nahtlose Überführung von Vorstudien-Ergebnissen in klassische Baugrundgutachten mit optimierter Erkundungstiefe."
          : "Seamless transition from preliminary studies to classic soil investigation reports with optimized exploration depth.",
        icon: <FileText size={24} />,
        detail: language === 'de'
          ? `<span class="font-bold text-lg text-geoblue-800 block mb-3">Wir bieten DIN- und Eurocode-konforme Baugrundgutachten und optimierte Erkundungsplanung:</span><br>• Erstellung klassischer Baugrunderkundungen gem. <strong>DIN EN 1997</strong> und <strong>DIN 4020</strong>, basierend auf Vorabinformationen aus der Vorstudie<br>• Optimierung der Erkundungstiefe und -anzahl für maximale Kosteneffizienz im Projekt<br>• Erstellung präziser Ausschreibungsunterlagen für Bauleistungen mit fundierter Analyse<br>• Effiziente Angebote für geotechnische Projekte durch Integration der <strong>KI-Analyse</strong>-Ergebnisse<br><br>Unsere integrierte Methodik bietet entscheidende Vorteile:<br>• Keine verlorenen Investitionen: Die Vorstudie fließt direkt in das Baugrundgutachten ein<br>• Fokussierte Erkundungsmaßnahmen statt teurer flächendeckender Standarduntersuchungen<br>• Normkonforme Gutachten mit zusätzlicher Datentiefe durch <strong>KI-Analyse</strong><br>• Deutliche Reduktion der Gesamtkosten für geotechnische Leistungen im Projektverlauf`
          : `<span class="font-bold text-lg text-geoblue-800 block mb-3">We offer DIN and Eurocode-compliant soil investigation reports and optimized exploration planning:</span><br>• Preparation of classic soil investigations according to <strong>DIN EN 1997</strong> and <strong>DIN 4020</strong>, based on preliminary information from the pre-study<br>• Optimization of exploration depth and number for maximum cost efficiency in the project<br>• Creation of precise tender documents for construction services with well-founded analysis<br>• Efficient proposals for geotechnical projects through integration of <strong>AI analysis</strong> results<br><br>Our integrated methodology offers decisive advantages:<br>• No lost investments: The preliminary study flows directly into the soil investigation report<br>• Focused exploration measures instead of expensive, comprehensive standard investigations<br>• Standards-compliant reports with additional data depth through <strong>AI analysis</strong><br>• Significant reduction of total costs for geotechnical services throughout the project`
      },
      {
        title: language === 'de' ? "Baufachliche Begleitung" : "Construction Support",
        description: language === 'de'
          ? "<strong>KI-gestützte</strong> Begleitung der Bauausführungen für Bauunternehmen und Bohrfirmen mit Fokus auf Risikominimierung."
          : "<strong>AI-supported</strong> guidance for construction companies and drilling firms with a focus on risk minimization.",
        icon: <HardHat size={24} />,
        detail: language === 'de'
          ? `<span class="font-bold text-lg text-geoblue-800 block mb-3">Unsere fachliche Begleitung während der Bauphase bietet praxisnahe Unterstützung:</span><br>• Fachliche Begleitung der Bauausführung mit Fokus auf geotechnische Aspekte und kritische Bauphasen<br>• Regelmäßige Baustellenbesuche und umfassende Dokumentation der geologischen Verhältnisse<br>• <strong>KI-gestützte</strong> Analyse von Abweichungen zwischen Prognose und tatsächlichem Baugrund<br>• Lösungsorientierte Beratung bei unerwarteten geologischen Herausforderungen<br>• Optimierte Bohrverlaufsplanung bei Wasserbau- und Brunnenbau-Projekten<br><br>Diese Dienstleistung bietet entscheidende Vorteile:<br>• Reduzierung von Baurisiken und kostenintensiven Überraschungen<br>• Schnelle Reaktion bei abweichenden Bodenverhältnissen<br>• Technisch fundierte Entscheidungsgrundlagen für Planer und Bauleitung<br>• Lückenlose Dokumentation für eventuelle Nachträge und Beweissicherung`
          : `<span class="font-bold text-lg text-geoblue-800 block mb-3">Our professional support during the construction phase offers practical assistance:</span><br>• Technical supervision of construction with focus on geotechnical aspects and critical construction phases<br>• Regular site visits and comprehensive documentation of geological conditions<br>• <strong>AI-based</strong> analysis of deviations between predictions and actual subsoil<br>• Solution-oriented consulting for unexpected geological challenges<br>• Optimized drilling path planning for hydraulic engineering and well construction projects<br><br>This service offers decisive advantages:<br>• Reduction of construction risks and cost-intensive surprises<br>• Quick response to deviating soil conditions<br>• Technically sound decision-making basis for planners and construction management<br>• Complete documentation for potential supplements and evidence preservation`
      }
    ];
    
    console.log('[servicesData] Successfully created services data with', data.length, 'services');
    return data;
  } catch (error) {
    console.error('[servicesData] Error creating services data:', error);
    return [];
  }
};
