import dynamic from 'next/dynamic';

const ArModelViewerDynamic = dynamic(() => import('@/components/common/webxr/ArModelViewer'), { ssr: false });

export default ArModelViewerDynamic;
