import {createClient,Entry} from 'contentful'

 const client=createClient({
    space:process?.env?.NEXT_PUBLIC_CONTENTFUL_SPACE_ID||'u8b3ckg07xkb',
    accessToken:process?.env?.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || 'zvnPASattsDHDSI6zMsZEFb6IJ9hJshqw-sRaqdF3eg'
})
/*interface ImageFields{
    title:string;
    description:string;
    file:{
      url:string;
    }
  }
  */
  //interface ImageEntry extends Entry<ImageFields>{}

export async function fetchEntries(){
  try {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log('Error: No entries found')
    return []
  } catch (error) {
    console.error('Error fetching entries:', error)
    return []
  }
}

export async function fetchEntryBySlug(slug:string){
    const entry=await client.getEntries({
        content_type:'your_content_type_id',
        'fields.slug':slug
    })
    if(entry.items) return entry.items[0];
    console.log('error getting entry.')
}
