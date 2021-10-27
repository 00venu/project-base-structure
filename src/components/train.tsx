// TrainSvg function starts
export const TrainSvg = (props: any) => {
    return (
        // Train div starts
        <div>
            <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3334 20.5867V9.33335C19.3334 5.61335 15.8534 4.80002 11.32 4.68002L12.3334 2.66669H16.6667V0.666687H3.33335V2.66669H9.66669L8.65335 4.69335C4.48002 4.81335 0.666687 5.64002 0.666687 9.33335V20.5867C0.666687 22.52 2.25335 24.1334 4.12002 24.5467L2.00002 26.6667V27.3334H4.97335L7.64002 24.6667H12.6667L15.3334 27.3334H18V26.6667L16 24.6667H15.8934C18.1467 24.6667 19.3334 22.84 19.3334 20.5867ZM10 22.6667C8.89335 22.6667 8.00002 21.7734 8.00002 20.6667C8.00002 19.56 8.89335 18.6667 10 18.6667C11.1067 18.6667 12 19.56 12 20.6667C12 21.7734 11.1067 22.6667 10 22.6667ZM3.33335 16.6667H16.6667V10H3.33335V16.6667Z"
                    fill={props.color} />
            </svg>
        </div>
        // Train div ends
    )
}
// TrainSvg function ends