import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Notify } from 'notiflix';
import useStore from '@/store/store';
import { selectCloseContactForm } from '../store/selectors';

export default function useContactForm() {
    //Handle Close Form
    const closeForm = useStore(selectCloseContactForm);
    //handle Send
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [disable, setDisable] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: any) => {
        setDisable(true);
        axios
            .post('https://portfolio-api-ten-sage.vercel.app/sendmail', {
                html: `
                <body>
                  <p>Querido Alexis,</p>
                
                  <p>Espero que estés bien. Soy ${data.name}, ${data.email}. 
                
                  <p>${data.subject}</p>
                </body>`,
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then(function (response: any) {
                if (response.status == 200) {
                    Notify.success(
                        'Gracias, por escribirme me pondre en contacto contigo.',
                    );
                    reset({ name: '', email: '', subject: '' });
                    closeForm();
                    return;
                }
                throw new Error('Error');
            })
            .catch(function () {
                // handle error
                Notify.failure('Lastimosamente ocurrio un error :c');
            })
            .finally(() => {
                setDisable(false);
            });
    };
    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        disable,
    };
}
