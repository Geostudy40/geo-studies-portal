
const ProcessSection = () => {
  const processSteps = [
    {
      number: 1,
      title: "Anfrage & Beratung",
      description: "Wir besprechen Ihr Projekt und Ihre spezifischen Anforderungen."
    },
    {
      number: 2,
      title: "Datensammlung",
      description: "Wir sammeln alle relevanten Daten und führen erste Analysen durch."
    },
    {
      number: 3,
      title: "KI-Analyse & Planung",
      description: "Unsere KI-Systeme analysieren die Daten und erstellen optimierte Untersuchungspläne."
    },
    {
      number: 4,
      title: "Berichterstellung",
      description: "Wir erstellen detaillierte, normkonforme Berichte mit klaren Handlungsempfehlungen."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-heading">
          Unser Prozess
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-geoblue-800 text-white text-xl font-bold mb-6 z-10 relative mx-auto">
                {step.number}
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-geoblue-200 -z-10"></div>
              )}
              <h3 className="text-xl font-semibold text-geoblue-800 mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
