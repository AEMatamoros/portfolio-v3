import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function useSubmit({
    handleContactformClose,
}: {
    handleContactformClose: () => void;
}) {
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
                    Swal.fire({
                        position: 'top-end',
                        icon: undefined,
                        title: 'Thanks i will get in contact with you!',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                    });
                    reset({ name: '', email: '', subject: '' });
                    handleContactformClose();
                    return;
                }
                throw new Error('Error');
            })
            .catch(function () {
                // handle error
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'An Error ocurred',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                });
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
