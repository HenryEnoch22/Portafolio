export default function downloadCV() {
    return (
        <a
            href="/cv/Henry_Enoch_Francisco_Vazquez_CV.pdf"
            download
            className="
                inline-block
                mt-8
                bg-red-400
                text-white
                px-6
                py-3
                rounded-full
                hover:bg-red-500
                transition
            "
        >
            Descargar CV
        </a>
    );
}