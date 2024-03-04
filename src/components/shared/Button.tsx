import { iButton } from '@Interfaces/sharedComponets';

export default function Button({ text, onClick }: iButton) {
    return (
        <button
            className="text-blue-dark rounded border border-detail bg-transparent px-4 py-2 font-semibold hover:border-transparent hover:bg-detail hover:text-light dark:border-darkdetail dark:border-darkdetail dark:hover:bg-darkdetail  dark:hover:text-dark"
            onClick={onClick}
        >
            {text}
        </button>
    );
}
