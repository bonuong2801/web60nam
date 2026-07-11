import { motion } from "motion/react";

export function VideoSection() {
  return (
    <section id="video" className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-white">Thước Phim Ký Ức</h2>
          <p className="text-slate-400 font-light text-lg mb-16 italic max-w-2xl mx-auto">
            "Những tòa nhà có thể thay đổi, nhưng tinh thần của con người sẽ mãi ở lại trong trái tim chúng ta."
          </p>
          
          <div className="w-full">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-amber-400">Video Kỷ Niệm 60 Năm</h3>
              <p className="text-slate-400 text-sm italic font-light pb-2">
                Nhìn lại chặng đường xây dựng và phát triển.
              </p>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-black/50 bg-slate-800 w-full aspect-video border border-slate-700">
                <video 
                  controls 
                  preload="none"
                  poster="/images/videosection-1.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/video-1.mp4" type="video/mp4" />
                  Trình duyệt của bạn không hỗ trợ thẻ video.
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
