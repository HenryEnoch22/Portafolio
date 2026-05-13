export default function TalkButton() {

    const handleClick = () => {
        alert("Esto todavía no hace nada w ajskaja");
    };

    return (
        <button
            onClick={handleClick}
            className="mt-8 bg-red-400 text-white px-6 py-3 rounded-full hover:bg-red-500 transition"
        >
            Let's Talk
        </button>
    );
}