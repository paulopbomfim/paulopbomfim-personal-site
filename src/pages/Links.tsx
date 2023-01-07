import { Link } from 'react-router-dom'

export function Links() {
  return (
    <div className="
      dark:bg-[#121214]
      bg-mobile
      md:bg-mobile
      lg:bg-desktop
      xl:bg-desktop
      bg-cover
      w-full
      min-h-screen
      flex
      flex-col
      gap-6
      justify-center
      items-center
      dark:text-white
      text-sm
      font-main
      p-6
    ">
      <header className="flex flex-col items-center gap-4">
        <img
          src="https://github.com/paulopbomfim.png"
          alt="Paulo Bomfim"
          className="w-36 rounded-full border-4 dark:border-[rgba(255,255,255,0.5)] border-[rgba(0,0,0,0.5)]"
        />
        <strong className="text-xl font-medium">@paulopbomfim</strong>
      </header>      
      <main className="max-w-[540px] w-full">
        <nav className="flex flex-col justify-center gap-4 items-center">
          <a className="
            w-full
            h-14
            flex
            justify-center
            items-center
            dark:bg-[rgba(255,255,255,0.1)]
            bg-[rgba(0,0,0,0.1)]
            rounded-md
            border
            dark:border-[rgba(255,255,255,0.5)]
            border-[rgba(0,0,0,0.5)]
            transition

            hover:dark:bg-[rgba(255,255,255,0.2)]
            hover:dark:border-[rgba(255,255,255,0.8)]
            hover:bg-[rgba(0,0,0,0.2)]
            hover:border-[rgba(0,0,0,0.8)]
          "
          href="https://www.linkedin.com/in/paulopbomfim/"
          >
            LinkedIn
          </a>
          <a className="
            w-full
            h-14
            flex
            justify-center
            items-center
            dark:bg-[rgba(255,255,255,0.1)]
            bg-[rgba(0,0,0,0.1)]
            rounded-md
            border
            dark:border-[rgba(255,255,255,0.5)]
            border-[rgba(0,0,0,0.5)]
            transition

            hover:dark:bg-[rgba(255,255,255,0.2)]
            hover:dark:border-[rgba(255,255,255,0.8)]
            hover:bg-[rgba(0,0,0,0.2)]
            hover:border-[rgba(0,0,0,0.8)]
          "
          href="https://github.com/paulopbomfim"
          >
            Github
          </a>
          <a className="
            w-full
            h-14
            flex
            justify-center
            items-center
            dark:bg-[rgba(255,255,255,0.1)]
            bg-[rgba(0,0,0,0.1)]
            rounded-md
            border
            dark:border-[rgba(255,255,255,0.5)]
            border-[rgba(0,0,0,0.5)]
            transition

            hover:dark:bg-[rgba(255,255,255,0.2)]
            hover:dark:border-[rgba(255,255,255,0.8)]
            hover:bg-[rgba(0,0,0,0.2)]
            hover:border-[rgba(0,0,0,0.8)]
          "
          href="https://www.instagram.com/paulopbomfim/"
          >
            Instagram
          </a>
          <Link className="
            w-full
            h-14
            flex
            justify-center
            items-center
            dark:bg-[rgba(255,255,255,0.1)]
            bg-[rgba(0,0,0,0.1)]
            rounded-md
            border
            dark:border-[rgba(255,255,255,0.5)]
            border-[rgba(0,0,0,0.5)]
            transition

            hover:dark:bg-[rgba(255,255,255,0.2)]
            hover:dark:border-[rgba(255,255,255,0.8)]
            hover:bg-[rgba(0,0,0,0.2)]
            hover:border-[rgba(0,0,0,0.8)]
          "
          to="/"
          >
            Meu Portfolio
          </Link>
        </nav>
      </main>
    </div>
  )
}
