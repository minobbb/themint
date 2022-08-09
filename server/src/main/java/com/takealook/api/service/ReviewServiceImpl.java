package com.takealook.api.service;

import com.takealook.api.request.ReviewRegisterPostReq;
import com.takealook.db.entity.Review;
import com.takealook.db.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class ReviewServiceImpl implements ReviewService{

    @Autowired
    ReviewRepository reviewRepository;

    @Override
    public int registerReview(Long writerSeq, ReviewRegisterPostReq reviewRegisterPostReq) {
        reviewRepository.save(Review.builder()
                .receiverSeq(reviewRegisterPostReq.getReceiverSeq())
                .writerSeq(writerSeq)
                .content(reviewRegisterPostReq.getContent())
                .score(reviewRegisterPostReq.getScore())
                .date(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
                .build());
        return 1;
    }
}
