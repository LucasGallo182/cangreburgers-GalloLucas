import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemListContainer() {
    const notify = () =>
        toast.success("Todavía no tenemos artículos disponibles. Intenta más tarde. Saludos!",
            {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    background: "linear-gradient(to right, #3f5efb, #fc466b)",
                    color: "white",
                }
            });

    return (
        <div>
            <button className='mt-5' onClick={notify}>Presioname</button>
            <ToastContainer />
        </div>
    );
}

export default ItemListContainer;