'use client';

export default function ServiceOverview() {
  return (
    <div className="flex flex-col text-right">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        خدمات طباعة عند الطلب بجودة عالية
      </h2>
      <p className="text-gray-600 mb-10 max-w-md">
        نقدم لك منصة متكاملة تتيح لك تصميم وبيع منتجاتك مثل التيشيرتات، الأكواب، الهوديز والمزيد، مع إمكانية تخصيص كل جزء من المنتج بسهولة واحترافية.
      </p>

      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">منتجات متنوعة</h3>
          <p className="text-gray-600">
            أكثر من 100 منتج يمكنك تخصيصه: ملابس، أكواب، أدوات مكتبية، والعديد من الخيارات.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">تصميم تفاعلي</h3>
          <p className="text-gray-600">
            أدوات تصميم سهلة تسمح لك بوضع تصميمك في أماكن مختلفة مع عرض مباشر للتكلفة.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">شحن عالمي</h3>
          <p className="text-gray-600">
            شحن سريع وموثوق لجميع أنحاء العالم مع تتبع مباشر للطلبات.
          </p>
        </div>
      </div>

      <button
        className="mt-10 self-start text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg rounded-full"
      >
        ابدأ الآن
      </button>
    </div>
  );
}
