import { FormEvent, useState } from "react";

type IconName = "arrow" | "bag" | "check" | "heart" | "menu" | "search" | "user" | "x";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    bag: (
      <>
        <path d="M6 8h12l-1 12H7L6 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    menu: (
      <>
        <path d="M4 8h16" />
        <path d="M4 16h16" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const products = [
  {
    name: "Уудам захтай цамц",
    category: "Эмэгтэй",
    color: "Сүүн цагаан",
    price: "389,000 ₮",
    image:
      "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
  {
    name: "Хангайн дулаан цамц",
    category: "Эрэгтэй",
    color: "Байгалийн саарал",
    price: "429,000 ₮",
    image:
      "https://images.unsplash.com/photo-1604573824419-289a9a10672c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
  {
    name: "Нөмөр ороолт",
    category: "Хэрэглэл",
    color: "Тэмээн бор",
    price: "219,000 ₮",
    image:
      "https://images.unsplash.com/photo-1604176132453-922aeee365df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
  {
    name: "Өглөөний задгай цамц",
    category: "Эмэгтэй",
    color: "Зөөлөн шаргал",
    price: "459,000 ₮",
    image:
      "https://images.unsplash.com/photo-1759229874914-c1ffdb3ebd0c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
];

const categories = ["Бүгд", "Эмэгтэй", "Эрэгтэй", "Хэрэглэл"];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Бүгд");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const visibleProducts =
    activeCategory === "Бүгд"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const toggleFavorite = (name: string) => {
    setFavorites((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  };

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-[#f6f3ed] text-[#26271f]">
      <div className="bg-[#273129] px-5 py-2.5 text-center text-[11px] font-medium tracking-[0.13em] text-[#f4efe4] sm:text-xs">
        500,000 ₮-өөс дээш худалдан авалтад хүргэлт үнэгүй
      </div>

      <header className="sticky top-0 z-50 border-b border-[#2d3029]/10 bg-[#f6f3ed]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
          <button
            className="p-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Цэс хаах" : "Цэс нээх"}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>

          <nav className="hidden items-center gap-8 text-[13px] font-medium lg:flex">
            <a className="nav-link" href="#шинэ">
              Шинэ загвар
            </a>
            <a className="nav-link" href="#бүтээгдэхүүн">
              Бүтээгдэхүүн
            </a>
            <a className="nav-link" href="#тухай">
              Бидний тухай
            </a>
          </nav>

          <a
            href="#эхлэл"
            className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center leading-none"
            aria-label="Ариунбаяр Ноолуур"
          >
            <span className="brand-serif text-[22px] tracking-[0.13em] sm:text-[26px]">
              АРИУНБАЯР
            </span>
            <span className="mt-1 text-[8px] font-medium tracking-[0.45em] text-[#757266]">
              НООЛУУР
            </span>
          </a>

          <div className="ml-auto flex items-center gap-1 sm:gap-3">
            <button className="hidden p-2 sm:block" aria-label="Хайх">
              <Icon name="search" />
            </button>
            <button className="hidden p-2 sm:block" aria-label="Хэрэглэгч">
              <Icon name="user" />
            </button>
            <button className="relative p-2" aria-label={`Сагсанд ${cartCount} бүтээгдэхүүн байна`}>
              <Icon name="bag" />
              {cartCount > 0 && (
                <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#a2462f] px-1 text-[9px] text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-[#2d3029]/10 bg-[#f6f3ed] px-6 py-6 lg:hidden">
            <div className="flex flex-col gap-5 text-sm">
              <a onClick={() => setMenuOpen(false)} href="#шинэ">
                Шинэ загвар
              </a>
              <a onClick={() => setMenuOpen(false)} href="#бүтээгдэхүүн">
                Бүтээгдэхүүн
              </a>
              <a onClick={() => setMenuOpen(false)} href="#тухай">
                Бидний тухай
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="эхлэл" className="relative min-h-[620px] overflow-hidden lg:min-h-[760px]">
          <img
            src="https://images.unsplash.com/photo-1549298222-1c31e8915347?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=2000"
            alt="Ноолууран хувцастай бүсгүй"
            className="absolute inset-0 h-full w-full object-cover object-[center_38%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f241f]/72 via-[#232820]/20 to-transparent" />
          <div className="relative mx-auto flex min-h-[620px] max-w-[1440px] items-end px-5 pb-16 md:px-10 lg:min-h-[760px] lg:items-center lg:px-16 lg:pb-0">
            <div className="max-w-[590px] text-white">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-white/80">
                Намар · Өвлийн шинэ загвар
              </p>
              <h1 className="brand-serif text-[50px] leading-[0.98] tracking-[-0.025em] sm:text-6xl lg:text-[82px]">
                Тал нутгийн
                <br />
                зөөлөн тансаг
              </h1>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/85 sm:text-base">
                Монголын өндөрлөгөөс сонгосон хамгийн нарийн ноолуур. Үеэс үед өвлөгдөх мөнхийн
                загвар.
              </p>
              <a
                href="#бүтээгдэхүүн"
                className="mt-9 inline-flex items-center gap-6 bg-[#f4f0e7] px-7 py-4 text-xs font-semibold tracking-[0.08em] text-[#272a23] transition hover:bg-white"
              >
                Шинэ загварыг үзэх <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] tracking-[0.18em] text-white/80 md:flex">
            <span className="h-px w-12 bg-white/60" />
            Монголын тал нутаг
          </div>
        </section>

        <section id="шинэ" className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:px-16 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div className="order-2 lg:order-1">
              <p className="eyebrow">Бидний үнэт зүйл</p>
              <h2 className="brand-serif mt-5 max-w-xl text-4xl leading-[1.08] sm:text-5xl lg:text-[62px]">
                Байгалиас ирсэн
                <br />
                цэвэр зөөлөн чанар
              </h2>
              <p className="mt-8 max-w-lg text-sm leading-7 text-[#646258] sm:text-[15px]">
                Бид малчдынхаа гараас ноолуурыг шууд авч, ширхэг бүрийг нямбайлан боловсруулдаг.
                Байгалийн өнгө, хариуцлагатай үйлдвэрлэл, Монгол ухааныг орчин үеийн загварт
                шингээнэ.
              </p>
              <a href="#тухай" className="text-link mt-8 inline-flex items-center gap-3">
                Үйл явцтай танилцах <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
            <div className="order-1 grid grid-cols-[1fr_0.72fr] items-end gap-4 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1751255836168-6dc27f00e8f7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1100"
                alt="Монголын ногоон уулс"
                className="h-[420px] w-full object-cover sm:h-[560px]"
              />
              <img
                src="https://images.unsplash.com/photo-1633943934209-31b7f3775fee?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=700"
                alt="Эвхсэн зөөлөн цамцнууд"
                className="mb-8 h-[260px] w-full object-cover sm:h-[360px]"
              />
            </div>
          </div>
        </section>

        <section id="бүтээгдэхүүн" className="bg-[#ebe5da] px-5 py-20 md:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Онцлох бүтээлүүд</p>
                <h2 className="brand-serif mt-4 text-4xl sm:text-5xl">
                  Таны өдөр бүрийн тансаглал
                </h2>
              </div>
              <div className="flex gap-5 overflow-x-auto pb-1 text-xs font-medium">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap border-b pb-2 transition ${
                      activeCategory === category
                        ? "border-[#272a23] text-[#272a23]"
                        : "border-transparent text-[#777268] hover:text-[#272a23]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {visibleProducts.map((product) => {
                const favorite = favorites.includes(product.name);
                return (
                  <article key={product.name} className="group">
                    <div className="relative overflow-hidden bg-[#ded8ce]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                      />
                      <button
                        onClick={() => toggleFavorite(product.name)}
                        className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-[#f7f3eb]/90 text-[#2c2c26] backdrop-blur-sm transition hover:bg-white"
                        aria-label={favorite ? "Дуртай зүйлээс хасах" : "Дуртай зүйлд нэмэх"}
                      >
                        <Icon
                          name="heart"
                          className={`h-[18px] w-[18px] ${favorite ? "fill-[#a2462f] text-[#a2462f]" : ""}`}
                        />
                      </button>
                      <button
                        onClick={() => setCartCount((count) => count + 1)}
                        className="absolute inset-x-3 bottom-3 translate-y-16 bg-[#f7f3eb] py-3.5 text-xs font-semibold opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
                      >
                        Сагсанд нэмэх
                      </button>
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="brand-serif text-[21px]">{product.name}</h3>
                        <p className="mt-1.5 text-[11px] tracking-[0.08em] text-[#777268]">
                          {product.color}
                        </p>
                      </div>
                      <p className="pt-1 text-sm font-medium">{product.price}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-14 text-center">
              <button className="border border-[#34352e] px-8 py-3.5 text-xs font-semibold transition hover:bg-[#2d3029] hover:text-white">
                Бүх бүтээгдэхүүнийг үзэх
              </button>
            </div>
          </div>
        </section>

        <section id="тухай" className="grid min-h-[680px] lg:grid-cols-2">
          <div className="relative min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1751191445677-418f90bb38e0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1400"
              alt="Монголын уулс, хөндий"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center bg-[#273129] px-7 py-20 text-[#f4f0e8] sm:px-14 lg:px-20">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold tracking-[0.3em] text-[#c9bca5]">
                ГАРАЛ ҮҮСЭЛ
              </p>
              <h2 className="brand-serif mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-[64px]">
                Монголын хөрснөөс
                <br />
                дэлхийн тайзнаа
              </h2>
              <p className="mt-8 text-sm leading-7 text-[#d2d2ca] sm:text-[15px]">
                Эрс тэс уур амьсгалд өссөн Монгол ямааны ноолуур хосгүй дулаан, зөөлөн чанартай.
                Ариунбаяр ноолуур энэхүү ховор нандин баялгийг малчин өрх, байгаль дэлхийдээ ээлтэй
                аргаар урлан бүтээдэг.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-5 border-t border-white/15 pt-8">
                <div>
                  <strong className="brand-serif block text-3xl">100%</strong>
                  <span className="mt-2 block text-[10px] tracking-wider text-white/55">
                    МОНГОЛ НООЛУУР
                  </span>
                </div>
                <div>
                  <strong className="brand-serif block text-3xl">18</strong>
                  <span className="mt-2 block text-[10px] tracking-wider text-white/55">
                    ЖИЛИЙН УР ЧАДВАР
                  </span>
                </div>
                <div>
                  <strong className="brand-serif block text-3xl">40</strong>
                  <span className="mt-2 block text-[10px] tracking-wider text-white/55">
                    МАЛЧИН ӨРХ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#a64630] px-5 py-16 text-[#fffaf2] md:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <p className="brand-serif text-3xl sm:text-4xl">Шинэ түүхийг хамтдаа эхлүүлье</p>
              <p className="mt-3 text-sm text-white/75">
                Шинэ загвар, онцгой мэдээг хамгийн түрүүнд аваарай.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-3 border-b border-white/50 pb-3 text-sm">
                <Icon name="check" className="h-5 w-5" />
                Бүртгэл амжилттай
              </div>
            ) : (
              <form onSubmit={subscribe} className="flex w-full max-w-md border-b border-white/50">
                <input
                  required
                  type="email"
                  aria-label="Цахим шуудан"
                  placeholder="Цахим шуудангийн хаяг"
                  className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/60"
                />
                <button className="px-3" type="submit" aria-label="Бүртгүүлэх">
                  <Icon name="arrow" />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-[#1e241f] px-5 pb-8 pt-16 text-[#eeebe2] md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="brand-serif text-2xl tracking-[0.14em]">АРИУНБАЯР</p>
            <p className="mt-2 text-[8px] tracking-[0.45em] text-white/50">НООЛУУР</p>
            <p className="mt-6 max-w-xs text-xs leading-6 text-white/55">
              Монголын байгалийн зөөлөн чанарыг
              <br />
              таны өдөр тутмын амьдралд.
            </p>
          </div>
          <div>
            <p className="footer-title">Дэлгүүр</p>
            <div className="footer-links">
              <a href="#бүтээгдэхүүн">Эмэгтэй</a>
              <a href="#бүтээгдэхүүн">Эрэгтэй</a>
              <a href="#бүтээгдэхүүн">Хэрэглэл</a>
              <a href="#шинэ">Шинэ загвар</a>
            </div>
          </div>
          <div>
            <p className="footer-title">Тусламж</p>
            <div className="footer-links">
              <a href="#тухай">Хүргэлт</a>
              <a href="#тухай">Буцаалт</a>
              <a href="#тухай">Арчилгааны зөвлөгөө</a>
              <a href="#тухай">Түгээмэл асуулт</a>
            </div>
          </div>
          <div>
            <p className="footer-title">Холбоо барих</p>
            <div className="footer-links">
              <span>Улаанбаатар хот</span>
              <span>Сүхбаатар дүүрэг</span>
              <a href="tel:+97677001122">7700 1122</a>
              <a href="mailto:hello@example.mn">Сайн байна уу</a>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 pt-7 text-[10px] text-white/35 sm:flex-row sm:justify-between">
          <span>© 2025 Ариунбаяр Ноолуур. Бүх эрх хуулиар хамгаалагдсан.</span>
          <span>Монголд урлав</span>
        </div>
      </footer>
    </div>
  );
}
