import Image from "next/image"
import { useCallback, useState } from "react"
import { BsHandThumbsUp, BsHandThumbsDown, BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs"

function ThumbUp({like, handleOnclick}) {
  return (
    <div className="relative p-0 m-0 w-4 h-4">
        <BsHandThumbsUp className="w-4 h-4 fill-red-500 absolute top-0 left-0" />
        <BsHandThumbsUpFill
          className={`w-4 h-4 fill-red-500 transition-opacity absolute top-0 left-auto opacity-0
          z-10 select-none cursor-pointer ${(like===1)&&"!opacity-100"}`}
          onClick={() => handleOnclick("up")}
        />
    </div>
  )
}

function ThumbDown({like, handleOnclick}) {
  return (
    <div className="relative p-0 m-0 w-4 h-4">
        <BsHandThumbsDown className="w-4 h-4 fill-red-500 absolute top-0 left-0" />
        <BsHandThumbsDownFill
          className={`w-4 h-4 fill-red-500 transition-opacity absolute top-0 left-auto opacity-0
          z-10 select-none cursor-pointer ${(like==0)&&"!opacity-100"}`}
          onClick={() => handleOnclick("down")}
        />
    </div>
  )
}

function Like({like, url}) {
  const [isLike, setIsLike] = useState(like)

  const handleLikeClick = useCallback(
    (whichThumbClicked) => {
      if(whichThumbClicked === "up") {
        setIsLike(isLike === 1 ? 2 : 1)
        // send http request to change the like
      }
      else if (whichThumbClicked === "down") {
        setIsLike(isLike === 0 ? 2 : 0)
        // send http request to change the like
      }
    },
    [isLike, url]
  )

  return (
    <div className="flex items-center gap-x-2.5">
      <ThumbUp like={isLike} handleOnclick={handleLikeClick} />
      <ThumbDown like={isLike} handleOnclick={handleLikeClick} />
    </div>
  )
}

function CommentCard_1({id=0, date="", username="", content="", like=0, img=""}) {
  return (
    <div className="w-full p-3.5">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-x-3">
          <Image
            width={50}
            height={50}
            alt=""
            src={img}
            className="w-10 h-10 object-center object-cover rounded-full"
          />
          <div>
            <p className="text-xs font-light text-white/70 font-[Lexend] leading-none">{date}</p>
            <p className="text-xs font-light text-white/70 font-[Lexend] leading-none mt-1.5">{username}</p>
          </div>
        </div>

        <Like like={like} />

      </div>

      <p className="text-xs font-light text-white font-[Lexend] leading-5 mt-3 pl-[52px]">
        {content}
      </p>

      <p className="text-xs font-light text-white/60 font-[Lexend] leading-none mt-5 pl-[52px]">Reply...</p>
    </div>
  )
}

export default CommentCard_1