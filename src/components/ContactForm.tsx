
import { useState } from 'react';
import { Upload } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    files: [] as File[],
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData((prev) => ({ ...prev, files: [...prev.files, ...filesArray] }));
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
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Nachricht gesendet",
        description: "Wir werden uns in Kürze bei Ihnen melden.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        files: [],
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

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
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-geoblue-500 focus:border-transparent min-h-[44px]"
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
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-geoblue-500 focus:border-transparent min-h-[44px]"
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
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-geoblue-500 focus:border-transparent min-h-[44px]"
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
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-geoblue-500 focus:border-transparent min-h-[120px]"
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="files" className="block text-gray-700 font-medium mb-2">
            {t('fileUploadLabel')}
          </label>
          
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-geoblue-400 transition-colors duration-300">
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
                      className="text-red-500 hover:text-red-700 min-h-[32px] min-w-[32px] p-1 transition-colors duration-300"
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
      </div>
      
      <div className="mt-8">
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className={`${
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
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
