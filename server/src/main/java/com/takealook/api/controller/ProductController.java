package com.takealook.api.controller;

import com.takealook.api.response.AuctionListEntityRes;
import com.takealook.api.response.ProductListEntityRes;
import com.takealook.api.service.AuctionImageService;
import com.takealook.api.service.AuctionService;
import com.takealook.api.service.MemberService;
import com.takealook.api.service.ProductService;
import com.takealook.db.entity.Auction;
import com.takealook.db.entity.AuctionImage;
import com.takealook.db.entity.Member;
import com.takealook.db.entity.Product;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * 경매 물품 관련 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "경매 물품 API", tags = {"Product"})
@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    ProductService productService;

    @Autowired
    AuctionService auctionService;

    @Autowired
    MemberService memberService;

    @Autowired
    AuctionImageService auctionImageService;

    @GetMapping
    public ResponseEntity<List<ProductListEntityRes>> getProductList(@RequestParam(value = "word", required = false) String word, @RequestParam("page") int page, @RequestParam("size") int size, @RequestParam("sort") String sort){
        // [key] 경매임박순: startTime, 최신등록순: seq, 낮은가격순: startPrice, 인기순: interest, 판매자신뢰도순: score
        List<ProductListEntityRes> productListEntityResList = new ArrayList<>();
        List<Product> productList = null;
        if("score".equals(sort)){ //판매자 신뢰도순
            Pageable pageable = PageRequest.of(page, size);
            productList = productService.getProductListOrderByScore(word, pageable);
        } else if("startTime".equals(sort) || "startPrice".equals(sort)){ // 경매임박순, 낮은가격순
            Pageable sortPageable = PageRequest.of(page, size, Sort.by(sort).ascending());
            productList = productService.getProductList(word, sortPageable);
        } else { // 최신등록순, 인기순
            Pageable sortPageable = PageRequest.of(page, size, Sort.by(sort).descending());
            productList = productService.getProductList(word, sortPageable);
        }
        for (Product product : productList){
            Long auctionSeq = product.getAuctionSeq();
            Auction auction = auctionService.getAuctionBySeq(auctionSeq);
            Long memberSeq = auction.getMemberSeq();
            Member member = memberService.getMemberByMemberSeq(memberSeq);
            List<AuctionImage> auctionImageList = auctionImageService.getAuctionImageListByAuctionSeq(auction.getSeq());
            productListEntityResList.add(ProductListEntityRes.of(product, auction, member, auctionImageList.get(0)));
        }
        return ResponseEntity.status(200).body(productListEntityResList);
    }
}
