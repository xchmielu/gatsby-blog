import React from 'react'
import { StaticQuery ,graphql} from 'gatsby'
import {Helmet} from 'react-helmet'

const SEO = (title, description, image, ) => (
<StaticQuery 
    query={query}
    render={({
            site: {
                siteMetadata: {
                    defaultTitle,
                    defaultDescription,
                    defaultImage,
                    url
                }
            }
    }) => {
        console.log(title.title)
        const seo = {
            title: title.title || defaultTitle,
            description: description || defaultDescription,
            image: `${url}/static/${image || defaultImage}`
        }
        console.log(seo.title)
        return(
        <Helmet>
            <title>{seo.title} {seo.title === defaultTitle ? '' : `| ${defaultTitle}` } </title>
            <meta name="image" content={seo.image} />
            <meta name="description" content={seo.description}/>
            <meta name="robots" content="index, follow" />
        </Helmet>
        )
    }}
/>
)

export default SEO

export const query = graphql`
{
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        url
      }
    }
  }
`