export default function SquaresEffect({
    currentTheme,
}: {
    currentTheme: string;
}) {
    return (
        <div className="area">
            <ul className={`circles ${currentTheme}`}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}
