/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from 'isomorphic-unfetch';
import { getLinkPreview } from 'link-preview-js';

export type GithubRepo = {
  id: number;
  name: string;
  private: boolean;
  html_url: string;
  description: string;
  homepage?: string;
  language: string;
  has_pages: boolean;
  archived: boolean;
  fork: boolean;
  disabled: boolean;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
};

type WebsitePartial = {
  url: string;
  mediaType: string;
  contentType: string;
  favicons: any[];
};
type WebsiteComplete = {
  url: string;
  title: any;
  siteName: any;
  description: any;
  mediaType: any;
  contentType: string;
  images: string[];
  videos: {
    url: any;
    secureUrl: any;
    type: any;
    width: any;
    height: any;
  }[];
  favicons: any[];
};

export type JSONSafeWebsite = {
  url: string;
  title: string;
  siteName: string;
  description: string;
  mediaType: string;
  contentType: string;
  images: string[];
  videos: {
    url: string;
    secureUrl: string;
    type: string;
    width: number;
    height: number;
  }[];
  favicons: any[];
};

export async function getGithubRepos(
  user: string
): Promise<GithubRepo[] | never> {
  try {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}

function isWebsiteComplete(
  response: WebsitePartial | WebsiteComplete
): response is WebsiteComplete {
  if (response as WebsiteComplete) {
    return true;
  } else return false;
}

export async function getWebsites(
  urls: string[]
): Promise<JSONSafeWebsite[] | never> {
  try {
    const responses: WebsitePartial[] | WebsiteComplete[] = await Promise.all(
      urls.map(url => getLinkPreview(url))
    );
    const JSONSafeResponses = responses.map(response => {
      function getSafeResponse(): JSONSafeWebsite {
        if (isWebsiteComplete(response)) {
          return {
            title: response.title || '',
            siteName: response.siteName || '',
            description: response.description || '',
            mediaType: response.mediaType || '',
            favicons: response.favicons || [],
            ...response
          };
        } else {
          return {
            ...response,
            title: '',
            siteName: '',
            description: '',
            images: [],
            videos: [],
            favicons: response.favicons || []
          };
        }
      }
      const safeResponse = getSafeResponse();

      return {
        ...safeResponse,
        title: safeResponse.title || '',
        siteName: safeResponse.siteName || '',
        description: safeResponse.description || '',
        mediaType: safeResponse.mediaType || '',
        favicons: safeResponse.favicons || []
      };
    });

    return JSONSafeResponses;
  } catch (error) {
    throw error;
  }
}
