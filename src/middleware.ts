// middleware.ts

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
    // Content Security Policy (CSP):
    /*
    Content Security Policy (CSP) is important to guard your Next.js application against various security 
    threats such as cross-site scripting (XSS), clickjacking, and other code injection attacks.
    By using CSP, developers can specify which origins are permissible for content 
    sources, scripts, stylesheets, images, fonts, objects, media (audio, video), iframes, and more.
     */
    const cspHeader =
    `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    `;
    // Replace newline characters and spaces
    const contentSecurityPolicyHeaderValue = cspHeader
        .replace(/\s{2,}/g, ' ')
        .trim()
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set('Content-Security-Policy',contentSecurityPolicyHeaderValue);
    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
    return response;
};

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        {
        // 除了 APIs 和靜態資料外，其他都路徑都套用
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },
    ],
}
