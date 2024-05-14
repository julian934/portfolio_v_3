import {fetchEntries} from '../getData/contentful'

export async function getEntryData(){
    const entries=await fetchEntries()
    return entries
}