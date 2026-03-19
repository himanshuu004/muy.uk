import {
  Store,
  Wheat,
  UtensilsCrossed,
  Shirt,
  Leaf,
  HandCoins,
} from "lucide-react"
import { ExpandingCards } from "../ui/expanding-cards"

function SuccessStory() {
  const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`

  const items = [
    {
      id: "ss-a1",
      title: "From Idea to Shopfront",
      description:
        "With MUY support, a local entrepreneur launched a small retail venture and created new income for the family.",
      imgSrc: withBase("/Success Stories/A1.webp"),
      icon: <Store size={24} />,
      linkHref: "/gallery#success-stories",
    },
    {
      id: "ss-a2",
      title: "Stronger Farms, Stronger Future",
      description:
        "Better planning, training, and access to resources helped turn farming into a sustainable business.",
      imgSrc: withBase("/Success Stories/A2.webp"),
      icon: <Wheat size={24} />,
      linkHref: "/gallery#success-stories",
    },
    {
      id: "ss-a3",
      title: "Home Kitchen to Local Brand",
      description:
        "A small food venture scaled up with guidance on packaging, licensing, and market connections.",
      imgSrc: withBase("/Success Stories/A3.webp"),
      icon: <UtensilsCrossed size={24} />,
      linkHref: "/gallery#success-stories",
    },
    {
      id: "ss-a4",
      title: "Skills into Income",
      description:
        "A tailoring unit grew from a single machine to regular orders and steady earnings.",
      imgSrc: withBase("/Success Stories/A4.webp"),
      icon: <Shirt size={24} />,
      linkHref: "/gallery#success-stories",
    },
    {
      id: "ss-a5",
      title: "Local Produce, Wider Reach",
      description:
        "Value addition and better marketing helped rural products reach more customers.",
      imgSrc: withBase("/Success Stories/A5.webp"),
      icon: <Leaf size={24} />,
      linkHref: "/gallery#success-stories",
    },
    {
      id: "ss-a6",
      title: "Confidence to Expand",
      description:
        "Mentorship and handholding made it easier to invest, grow, and create local employment.",
      imgSrc: withBase("/Success Stories/A6.webp"),
      icon: <HandCoins size={24} />,
      linkHref: "/gallery#success-stories",
    },
    {
      id: "ss-a7",
      title: "A Business That Lasts",
      description:
        "With the right processes, a micro-enterprise improved quality and built repeat customers.",
      imgSrc: withBase("/Success Stories/A7.webp"),
      icon: <Store size={24} />,
      linkHref: "/gallery#success-stories",
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Success Stories
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Inspiring journeys of entrepreneurs who transformed their dreams into
            reality.
          </p>
        </div>

        <div className="mx-auto flex w-full justify-center">
          <ExpandingCards items={items} defaultActiveIndex={0} />
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-lg bg-black shadow-lg">
            <iframe
              className="absolute left-0 top-0 h-full w-full rounded-lg"
              src="https://www.youtube.com/embed/rticvbE1nKM?enablejsapi=1&rel=0"
              title="MUY Success Stories - Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg bg-black shadow-lg">
            <iframe
              className="absolute left-0 top-0 h-full w-full rounded-lg"
              src="https://www.youtube.com/embed/E94b91PRN5I?enablejsapi=1&rel=0"
              title="MUY Success Stories - Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStory

