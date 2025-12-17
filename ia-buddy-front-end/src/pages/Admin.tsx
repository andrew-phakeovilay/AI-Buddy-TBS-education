import { useState } from "react";
import { useTranslation } from "react-i18next";

interface FormData {
    type: "image" | "ressource";
    titre: string;
    lien: string;
    fichier?: File | null;
}

export function Admin() {

    const { t } = useTranslation();
    
    const [showForm, setShowForm] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        type: "image",
        titre: "",
        lien: "",
        fichier: null,
    });

    const [items, setItems] = useState<FormData[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleAddClick = () => setShowForm(true);
    const handleCancel = () => {
        setShowForm(false);
        setFormData({ type: "image", titre: "", lien: "", fichier: null });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData((prev) => ({ ...prev, fichier: file }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (editIndex !== null) {
            const updated = [...items];
            updated[editIndex] = formData;
            setItems(updated);
            setEditIndex(null);
        } else {
            setItems((prev) => [...prev, formData]);
        }
        
        handleCancel();
    };

    const handleDelete = (index: number) => {
        setItems((prev) => prev.filter((_, i) => i !== index));
    };

    const handleEdit = (index: number) => {
        setFormData(items[index]);
        setEditIndex(index);
        setShowForm(true);
    };

    return (
        <div className="min-h-screen bg-white text-black flex flex-col items-center p-6">
            <div className="w-full max-w-md">
                <div className="flex justify-center items-center mb-6">
                    <h1 className="text-xl font-semibold">{t('admin')}</h1>
                </div>

                <button className="bg-rose-500 hover:bg-slate-500 text-white px-4 py-2 rounded-md mb-6" onClick={handleAddClick}>
                {t('add')}
                </button>
                
                {showForm && (
                    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
                        <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6">
                            <h3 className="text-lg font-bold mb-4">{t('add-ressource')}</h3>
                        
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="titre"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                    {t("title-label-add-ressource-form")}
                                    </label>
                                    <input
                                        type="text"
                                        id="titre"
                                        name="titre"
                                        value={formData.titre}
                                        onChange={handleChange}
                                        className="p-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <span className="block text-sm font-medium text-gray-700">
                                        {t('type-label-form')}
                                    </span>
                                    <div className="flex space-x-4 mt-2">
                                        <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="type"
                                            value="image"
                                            checked={formData.type === "image"}
                                            onChange={handleChange}
                                            className="text-pink-500 focus:ring-pink-500"
                                        />
                                        <span>{t('image-radio-form')}</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="type"
                                            value="ressource"
                                            checked={formData.type === "ressource"}
                                            onChange={handleChange}
                                            className="text-pink-500 focus:ring-pink-500"
                                        />
                                        <span>{t('ressource-radio-form')}</span>
                                        </label>
                                    </div>
                                </div>

                                {formData.type === "image" && (
                                    <div>
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                        {t('import-file-label-form')}
                                        </label>
                                        
                                        <label
                                            htmlFor="fichier"
                                            className="cursor-pointer inline-block bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium py-1.5 px-3 rounded shadow-sm transition duration-200 mb-2"
                                        >
                                        {t('import-file-button-form')}
                                        </label>
                                        
                                        <input
                                            type="file"
                                            id="fichier"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />

                                        {formData.fichier && (
                                            <p className="text-sm text-gray-600 mt-1">
                                                {t('selected-file')} : {formData.fichier.name}
                                            </p>
                                        )}
                                    </div>
                                )}

                                {formData.type === "ressource" && (
                                    <div>
                                        <label
                                            htmlFor="lien"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                        {t('link-ressource-label-form')}
                                        </label>
                                        <input
                                            type="url"
                                            id="lien"
                                            name="lien"
                                            value={formData.lien}
                                            onChange={handleChange}
                                            className="p-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                                            required
                                        />
                                    </div>
                                )}

                        
                                <div className="flex justify-end space-x-2">
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                                    >
                                    {t('cancel-form')}
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded"
                                    >
                                    {t('submit-form')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                <div className="mt-4 space-y-4">
                    {items.map((item, index) => (
                    <>
                        <div key={index} className="bg-white text-black rounded-lg p-4 shadow">
                            <h2 className="font-semibold">{item.titre}</h2>
                            <p className="text-gray-500 text-sm">
                            {item.type === "image"
                                ? "Image importée"
                                : `Lien de la ressource : ${item.lien}`}
                            </p>
                        </div>
                            
                        <div className="flex space-x-2">
                            <button
                                onClick={() => handleEdit(index)}
                                className="bg-blue-500 hover:bg-slate-500 text-white px-4 py-2 rounded-md mb-6"
                            >
                                {t('edit')}
                            </button>
                            <button
                                onClick={() => handleDelete(index)}
                                className="bg-rose-500 hover:bg-slate-500 text-white px-4 py-2 rounded-md mb-6"
                            >
                                {t('delete')}
                            </button>
                        </div>
                    </>
                    ))}
                </div>

            </div>
        </div>
    );
}
