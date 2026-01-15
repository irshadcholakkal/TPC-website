// import React from 'react';

// interface PlatformIconProps {
//     type: 'amazon' | 'noon' | 'talabat' | 'whatsapp' | 'custom' | 'keeta' | 'smile';
//     className?: string;
// }

// export default function PlatformIcon({ type, className = '' }: PlatformIconProps) {
//     const baseClass = `w-12 h-12 ${className}`;

//     const icons = {
//         custom: (
//             <svg className={baseClass} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect x="8" y="10" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
//                 <path d="M14 16h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 <path d="M4 38h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 <path d="M24 16v16" stroke="currentColor" strokeWidth="2" />
//             </svg>
//         ),
//         amazon: (
//             <svg className={baseClass} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M30 28C26 31 20 33 15 33C8 33 2 28 2 20C2 12 8 7 15 7C22 7 26 11 28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 <path d="M15 16C15 16 18 13 22 13C26 13 28 15 28 18C28 22 24 23 20 24C16 25 14 26 14 29C14 31 16 33 19 33C22 33 24 31 25 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 <path d="M8 38C8 38 18 42 32 42C40 42 46 38 46 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 <path d="M32 42C32 42 38 40 42 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//         ),
//         keeta: (
//             <svg className={baseClass} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M24 4L8 16v20h32V16L24 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
//                 <path d="M24 14l-8 8h16l-8-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 <path d="M16 30h16" stroke="currentColor" strokeWidth="2" />
//             </svg>
//         ),
//         talabat: (
//             <svg className={baseClass} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M10 20H18V28H10V20Z" stroke="currentColor" strokeWidth="2" />
//                 <path d="M22 16H30V24H22V16Z" stroke="currentColor" strokeWidth="2" />
//                 <path d="M34 20H42V28H34V20Z" stroke="currentColor" strokeWidth="2" />
//                 <path d="M16 32L24 28L32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//         smile: (
//             <svg className={baseClass} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
//                 <path d="M16 26c2 4 6 6 8 6s6-2 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 <path d="M17 18v2M31 18v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//         ),
//         whatsapp: (
//             <svg className={baseClass} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 27.4 7 30.6 8.6 33.2L6 42L15 39.4C17.6 41 20.7 42 24 42Z" stroke="currentColor" strokeWidth="2" />
//                 <path d="M18 28C18 28 19 30 21 32C23 34 28 30 32 26C34 24 34 22 33 21C32 20 31 20 30 21C29 22 28 23 27 24C26 25 25 25 24 24C23 23 21 21 20 20C19 19 19 18 20 17C21 16 22 15 23 14C24 13 24 12 23 11C22 10 20 10 19 11C17 13 16 16 18 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//         ),
//         noon: (
//             <svg className={baseClass} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M12 18V30C12 33 14 35 17 35C20 35 22 33 22 30V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 <path d="M26 30V18C26 15 28 13 31 13C34 13 36 15 36 18V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
//             </svg>
//         ),
//     };

//     return icons[type];
// }
