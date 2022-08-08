package com.takealook.api.service;

import com.takealook.db.entity.History;
import com.takealook.db.entity.Member;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface HistoryService {
    List<History> getHistoryListByMemberSeq(Long memberSeq, Pageable pageable, int salesPurchase);
    History getHistoryBySeq(Long historySeq);
    History getPurchaseByProductSeq(Long productSeq);
}
