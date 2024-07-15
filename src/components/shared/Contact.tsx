import useStore from '@/store/store';
import useContactForm from '@Hooks/useContactForm';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    selectCloseContactForm,
    selectContactFormState,
    selectEsLabels,
    selectEnLabels,
    selectCurrentLanguaje,
} from '@/store/selectors';
export default function Contact() {
    const { register, handleSubmit, errors, onSubmit, disable } =
        useContactForm();

    const show = useStore(selectContactFormState);
    const handleContactFormClose = useStore(selectCloseContactForm);

    const languaje = useStore(selectCurrentLanguaje);
    const ES = useStore(selectEsLabels);
    const EN = useStore(selectEnLabels);

    return (
        <section
            className={`fixed top-0 z-40 flex min-h-[100vh] w-full flex-col items-center justify-center bg-light p-4 transition-all duration-300 dark:bg-dark sm:p-4 md:p-4 lg:p-16 xl:p-16`}
            style={{ transform: `translateX(${show ? '0' : '100%'})` }}
        >
            <div className="container flex flex-col">
                <FontAwesomeIcon
                    className="fa-solid fa-circle-xmark fa-2xl close dark:text-dark-detail absolute right-4 top-4 cursor-pointer text-detail hover:text-red-600"
                    onClick={handleContactFormClose}
                    icon={faClose}
                />
                <h2 className="my-4 text-5xl font-semibold text-secondary dark:text-secondary">
                    {languaje === 'ES' ? ES.contactTitle : EN.contactTitle}
                </h2>

                <form
                    className="m-auto w-full md:w-6/12"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            {languaje === 'ES'
                                ? ES.contactFullName
                                : EN.contactFullName}
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                            placeholder="Jon Doe"
                            {...register('name', { required: true })}
                        />
                        {errors.name && (
                            <span className="text-red-600">
                                <strong>
                                    {languaje === 'ES'
                                        ? ES.requiredField
                                        : EN.requiredField}
                                </strong>
                            </span>
                        )}
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            {languaje === 'ES'
                                ? ES.contactEmail
                                : EN.contactEmail}
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                            placeholder="doe@.com"
                            {...register('email', { required: true })}
                        />
                        {errors.email && (
                            <span className="text-red-600">
                                <strong>
                                    {languaje === 'ES'
                                        ? ES.requiredField
                                        : EN.requiredField}
                                </strong>
                            </span>
                        )}
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="text"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            {languaje === 'ES'
                                ? ES.contactSubject
                                : EN.contactSubject}
                        </label>
                        <textarea
                            id="text "
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                            {...register('subject', { required: true })}
                        ></textarea>
                        {errors.subject && (
                            <span className="text-red-600">
                                <strong>
                                    {languaje === 'ES'
                                        ? ES.requiredField
                                        : EN.requiredField}
                                </strong>
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className={`dark:hover:bg-secondary-detail w-full rounded-lg bg-detail px-5 py-2.5 text-center text-sm font-medium text-light hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-darkdetail dark:text-dark  dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto ${disable ? 'bg-gray-500 dark:bg-gray-500' : 'dark:bg-blue-600'}`}
                        disabled={disable}
                    >
                        {languaje === 'ES' ? 'Enviar' : 'Send'}
                    </button>
                </form>
            </div>
        </section>
    );
}
