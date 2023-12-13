import {MapPin , Mail , Facebook} from "lucide-react";

export function Contact() {
    return (
        <section className="bg-green bg-opacity-10" id="contact">
            <div className="py-24 grid grid-cols-2 p-16 px-32 gap-12">
                <div className="flex flex-col">
                    <div>
                        <h2 className="mb-4 text-4xl text-green font-bold ">Contacter Nous</h2>
                        <p className="mb-8 lg:mb-16 font-light text-gray-500">
                            Nous sommes ravis de vous offrir notre assistance et de répondre à toutes vos questions.
                            N'hésitez pas à nous contacter en utilisant le formulaire ci-dessous. Que vous ayez besoin
                            d'informations supplémentaires sur nos programmes, que vous souhaitiez partager vos commentaires
                            , notre équipe
                            est là pour vous aider.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex gap-6 text-green font-bold">
                            <MapPin  absoluteStrokeWidth className="text-red"/> CHU Joseph RASETA BEFELATANANA, Antananarivo, Madagascar
                        </div>

                        <div className="flex gap-6 text-green font-bold">
                            <Mail absoluteStrokeWidth className="text-red"/> contact@dgfs.gov.mg
                        </div>

                        <div className="flex gap-6 text-green font-bold">
                            <Facebook  absoluteStrokeWidth className="text-red"/> DGFS Direction Générale de Fourniture des Soins
                        </div>
                    </div>
                </div>
                <div>
                    <form action="#" className="space-y-8 flex flex-col">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                Votre email</label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-green focus:border-green block focus-visible:border-green focus-visible:ring-green w-full p-2.5 h-14"
                                required/>
                        </div>
                        <div>
                            <label htmlFor="subject"
                                   className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                            <input type="text" id="Sujet"
                                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 h-14"
                                   required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="Message" className="block mb-2 text-sm font-medium text-gray-900">Your
                                message</label>
                            <textarea
                                id="message"
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Commentaire...">
                            </textarea>
                        </div>
                        <button type="submit"
                                className="w-fit text-sm border-2 border-red text-red  font-bold p-4 px-12 rounded-sm ml-auto hover:text-white hover:bg-red transition-all duration-300">
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}