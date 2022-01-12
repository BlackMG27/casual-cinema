import React, {Fragment} from "react";
import Image from 'next/image'
import { useRouter } from "next/router";

const CreditList = (star) => {
    const imageURL = "https://image.tmdb.org/t/p/w500"
    const {info} = star;
    const router = useRouter();
    return (
        
        <Fragment>
            <figure
                onClick={() =>
                    router.push({
                        pathname: `/person/[id]`,
                        query: {id: info.id}
                    })
                }
            >
                <Image
                    src={imageURL + info.profile_path}
                    alt={info.name}
                    width="200"
                    height="300"
                />
                <figcaption>{`${info.name} as ${info.character}`}</figcaption>
            </figure>
        </Fragment>
    )
}

export default CreditList
