
// .grid {
//   display: flex;
//   align-items: center;
//   @media (max-width: 768px) {
//   flex-wrap: wrap;

//   }
//   .col,
//   [class*="col-"] {
//     width: 100%;
//     padding: 7.5px;
//   }

//   $columns: 12;
//   @for $i from 0 through $columns {
//     .col-#{$i} {
//       $col: calc($columns/$i);
//       $width: calc(100% / $col);
//       width: $width;
//     }
//   }
// }
// lg-992px
// xl-1200
// xxl-1400



































// .styling-font {
//   padding: 4px 6px;
//   background: $header-clr;
//   color: $white-clr;
//   font-size: $font-400;
// }

// @mixin flex($sb, $direction, $ai) {
//   display: flex;
//   justify-content: $sb;
//   flex-direction: $direction;
//   align-items: $ai;
// }

// @mixin font($fsize, $lht, $fw, $clr) {
//   font-size: $fsize;
//   line-height: $lht;
//   font-weight: $fw;
//   color: $clr;
// }
// .b-font {
//   @include font($font-900, 1.12em, 500, $white-clr);
//   width: 100%;
//   margin: 18px 0;
// }
// .sub-header {
//   @include font($font-800, 1.12em, 500, $white-clr);
//   margin:  16px 0 18px 0;
//   @include media(tablet) {
//     font-size: $font-700;
//   }
// }
// .main-card {
//   position: relative;
//   &_text {
//     position: absolute;
//     display: grid;
//     place-items: start;
//     gap: 18px;
//     bottom: 0;
//     left: 0;
//     background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
//       width: 100%;
//     padding: 0 24px 24px 24px;
//     @include media(tablet) {
//       padding: 0 12px 20px 12px;
      
//     }
//   }
//   img{
//     height: 100%;
//   }
// }
// .user-text{
//     @include font($font-400,1.12em,400,$white-clr);

   

// }
