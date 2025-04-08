

const PrimaryBtn = ({
    className = '',
    text = 'Hover me',
    fromClr = 'from-sky-500',  // Default: sky-500
    viaClr = 'via-lime-400',  // Default: lime-400
    toClr = 'to-lime-700',    // Default: lime-700
    widthSize = 'w-[50%]',    // Default: 50%
    py = 'py-4',             // Default: py-4
    px = 'px-10',            // Default: px-10
    onClick,
    textColor = 'text-gray-900', // Added prop for text color
    borderColor = 'border-[#2c9caf]', // Added prop for border color
}) => {
    return (
        <button
            onClick={onClick}
            className={`${className} ${widthSize} ${px} ${py} mt-6 font-bold text-xl tracking-widest uppercase cursor-pointer ${textColor} ${borderColor} rounded-md bg-white isolation-auto z-10 border-2 border-lime-500 transition-all duration-800 ease-in-out overflow-hidden hover:text-white hover:rounded-4xl hover:scale-110 hover:border-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] bg-gradient-to-bl ${fromClr} ${viaClr} ${toClr} hover:bg-gradient-to-tr hover:${fromClr} hover:${viaClr} hover:${toClr}`}
        >
            {text}
        </button>
    );
};

export default PrimaryBtn;
