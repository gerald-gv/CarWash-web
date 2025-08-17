import { Skeleton } from "@/components/ui/skeleton"

const SkeletonCard = () => {
  return (
    <div className="flip-card">
        <article className="card bg-slate-500/25 p-4 space-y-4">
            
            <div className="flex justify-center">
                <Skeleton className="h-6 w-3/4 rounded-md" />
            </div>

            <Skeleton className="h-40 w-full rounded-xl" />

            <div className="space-y-2" >
                <Skeleton className="h-4 w-2/3"/>
                <Skeleton className="h-4 w-2/3"/>
                <Skeleton className="h-4 w-2/3"/>
            </div>

            <div className="flex justify-center">
                <Skeleton className="h-14 w-40 rounded-lg"/>
            </div>
        </article>
    </div>
  )
}

export default SkeletonCard