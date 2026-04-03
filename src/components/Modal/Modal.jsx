export function Modal({ product, onClose }) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[16px] w-[640px] flex overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[300px] h-[400px]">
          <img
            src={product.photo}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 p-[24px] flex flex-col gap-[12px]">
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-bold text-[#12282F]">
              {product.name}
            </h2>
            <button onClick={onClose} className="text-[20px]">
              ✕
            </button>
          </div>
          <p className="text-[16px] text-[#5A696E]">
            {product.description || "Tavsif mavjud emas"}
          </p>
          <button className="w-full bg-[#EDC843] h-[44px] rounded-[10px] font-semibold text-[15px] text-[#12282F] mt-[20px]">
            Savatchaga <span>{product.price}</span>
          </button>
          <div className="text-[18px] font-bold text-[#12282F] mt-auto">
            {product.price} UZS
          </div>
        </div>
      </div>
    </div>
  );
}
