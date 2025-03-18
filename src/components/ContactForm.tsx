
import { useState } from 'react';
import { Upload, Home } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ContactForm = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    files: [] as File[],
    sendCopy: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      
      // Filter files by allowed types and size
      const allowedTypes = ['.pdf', '.jpg', '.jpeg', '.png', '.dwg', '.dxf'];
      const maxSize = 10 * 1024 * 1024; // 10MB
      
      const validFiles = filesArray.filter(file => {
        const fileExt = '.' + file.name.split('.').pop()?.toLowerCase();
        const isValidType = allowedTypes.some(type => 
          type === fileExt || 
          (type === '.jpg' && fileExt === '.jpeg')
        );
        const isValidSize = file.size <= maxSize;
        
        if (!isValidType || !isValidSize) {
          toast({
            title: isValidType ? "Datei zu groß" : "Ungültiges Dateiformat",
            description: isValidType 
              ? `Die Datei ${file.name} ist größer als 10MB.` 
              : `Die Datei ${file.name} hat ein nicht unterstütztes Format.`,
            variant: "destructive"
          });
          return false;
        }
        return true;
      });
      
      setFormData((prev) => ({ ...prev, files: [...prev.files, ...validFiles] }));
    }
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare form data for submission
    const submissionData = {
      ...formData,
      recipient: 'info@geostudys.com',
      sendCopy: formData.sendCopy
    };
    
    // Simulate API call with a slightly longer delay for realism
    setTimeout(() => {
      console.log('Form submitted to info@geostudys.com:', submissionData);
      
      // Show toast notification
      toast({
        title: "Nachricht gesendet",
        description: "Wir werden uns in Kürze bei Ihnen melden.",
      });
      
      // Set submitted state to true
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md">
        <Alert className="mb-6 bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            <p className="text-lg font-semibold mb-2">Vielen Dank für Ihre Nachricht!</p>
            <p>Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
          </AlertDescription>
        </Alert>
        
        <Link to="/">
          <Button className="mt-4" variant="outline">
            <Home className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            {t('nameLabel')} *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-geoblue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            {t('emailLabel')} *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-geoblue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            {t('phoneLabel')}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-geoblue-500 focus:border-transparent"
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            {t('messageLabel')} *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange as React.ChangeEventHandler<HTMLTextAreaElement>}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-geoblue-500 focus:border-transparent"
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="files" className="block text-gray-700 font-medium mb-2">
            {t('fileUploadLabel')}
          </label>
          
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
            <input
              id="files"
              name="files"
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="files"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <Upload className="w-12 h-12 text-gray-400 mb-4" />
              <span className="text-gray-600">
                Dateien hier ablegen oder <span className="text-geoblue-600 underline">durchsuchen</span>
              </span>
              <span className="text-gray-500 text-sm mt-1">
                Max. 10MB pro Datei
              </span>
              <span className="text-gray-500 text-sm mt-1">
                Unterstützte Dateiformate: PDF, JPG, PNG, DWG, DXF
              </span>
            </label>
          </div>
          
          {formData.files.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-700 mb-2">Ausgewählte Dateien:</h4>
              <ul className="space-y-2">
                {formData.files.map((file, index) => (
                  <li key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <span className="text-sm text-gray-700 truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="md:col-span-2">
          <div className="flex items-center">
            <input
              id="sendCopy"
              name="sendCopy"
              type="checkbox"
              checked={formData.sendCopy}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-geoblue-600 focus:ring-geoblue-500 border-gray-300 rounded"
            />
            <label htmlFor="sendCopy" className="ml-2 block text-sm text-gray-700">
              Eine Kopie dieser Nachricht an meine E-Mail-Adresse senden
            </label>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn-primary w-full py-3 text-lg flex justify-center items-center ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Wird gesendet...
            </>
          ) : (
            t('sendButton')
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
