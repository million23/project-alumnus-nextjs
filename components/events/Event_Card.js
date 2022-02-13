import { AnimatePresence, motion } from "framer-motion"
import dayjs from "dayjs"
import { _Transition_Card } from "../_Animations"
import Link from "next/link"
import { useState } from "react"
import { CgReadme } from "react-icons/cg"

const Event_Card = ({ title, id, created_at, slug, author }) => {

    const [loading, setLoading] = useState(false)

    return (
        <motion.div
            layout
            variants={_Transition_Card}
            initial="initial" animate="animate" exit="exit"
            whileHover={{ translateY: -5 }}
            key={id} className="card card-bordered shadow-2xl border-2 border-base-content bg-base-200">
            <div className="card-body p-5">
                <h2 className="card-title">{title}</h2>
                <p className="text-sm">
                    <span className="text-slate-500">Created At: </span>
                    {dayjs(created_at).format("MM/DD/YYYY - h:mma")}
                </p>
                <p className="text-sm">
                    <span className="text-slate-500">Created By: </span>
                    {author}
                </p>
                <div className="card-actions justify-end">
                    {!loading && (
                        <Link href={{
                            pathname: `/events/${slug}`,
                            query: {
                                id: id,
                            }
                        }} scroll={false} >
                            <button

                                onClick={() => setLoading(true)}
                                className="btn btn-primary btn-sm">
                                <CgReadme size={25} />
                                <span className="ml-3">Read More</span>
                            </button>
                        </Link>
                    )}
                    {loading && (
                        <p className="text-base-content">Prefetching Data</p>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default Event_Card