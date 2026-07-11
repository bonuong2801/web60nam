import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, Clock, CheckCircle, X } from "lucide-react";
import { useState } from "react";

export function EventInfo() {
  const [showThanks, setShowThanks] = useState(false);

  return (
    <section id="event" className="py-24 bg-[#F7F5F0] dark:bg-slate-950 transition-colors border-y border-slate-200 dark:border-slate-700 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-slate-900 dark:text-slate-50">Thư Mời Trân Trọng!</h2>
            <p className="text-slate-500 font-light text-lg mb-8">
              Kính mời các thế hệ giáo viên và học sinh trở về tham dự đêm hội kỷ niệm. Cùng họp mặt ôn lại những kỷ niệm thân thương và gắn kết các thế hệ.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 text-lg">Ngày Tổ Chức</h4>
                  <p className="text-slate-500">Thứ Bảy, ngày 12 tháng 11, 2026</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 text-lg">Thời Gian</h4>
                  <p className="text-slate-500">18:00 - 23:00 (Hội Ngộ & Gala Dinner)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 text-lg">Địa Điểm</h4>
                  <p className="text-slate-500">Sân vận động & Hội trường lớn<br/>Thành phố Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-[#F7F5F0] p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-inner">
              <h3 className="font-serif text-2xl text-slate-900 dark:text-slate-50 mb-6">Lịch Trình Sự Kiện</h3>
              <ul className="space-y-4">
                {[
                  { time: "18:00", text: "Đón Khách & Chụp Ảnh Lưu Niệm" },
                  { time: "19:00", text: "Khai Mạc Lễ Kỷ Niệm 60 Năm Thành Lập" },
                  { time: "20:00", text: "Khai Tiệc Gala Dinner" },
                  { time: "21:30", text: "Giao Lưu Văn Nghệ Liên Thế Hệ" },
                  { time: "22:45", text: "Lời Tri Ân & Bắn Pháo Hoa" }
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-4 last:border-0 last:pb-0">
                    <span className="font-mono text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-1 rounded">{item.time}</span>
                    <span className="text-slate-600 font-medium text-sm text-right leading-tight max-w-[200px]">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button 
              onClick={() => setShowThanks(true)}
              className="w-full mt-6 py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition duration-300 shadow-xl shadow-slate-900/10"
            >
              Chấp Nhận Lời Mời Ngay
            </button>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {showThanks && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowThanks(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl dark:shadow-black/50 relative text-center"
            >
              <button 
                onClick={() => setShowThanks(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} />
              </div>
              
              <h3 className="font-serif text-3xl text-slate-900 dark:text-slate-50 mb-4">Cảm ơn bạn!</h3>
              <p className="text-slate-600 font-light text-lg mb-8 leading-relaxed">
                Xin chân thành cảm ơn bạn đã nhận lời tham dự Lễ Kỷ Niệm 60 Năm Thành Lập. Sự hiện diện của bạn là niềm vinh dự và góp phần làm nên thành công của chương trình.
              </p>
              
              <button 
                onClick={() => setShowThanks(false)}
                className="w-full py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors"
              >
                Đóng
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
