export default function PropertyCardSkeleton() {
    return (
        <div className="w-full animate-pulse">
            {/* Image Skeleton */}
            <div className="relative aspect-square rounded-2xl bg-gray-200 mb-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
            </div>

            {/* Text Skeletons */}
            <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
        </div>
    );
}
