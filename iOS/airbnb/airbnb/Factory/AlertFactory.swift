//
//  AlertFactory.swift
//  airbnb
//
//  Created by Song on 2021/05/20.
//

import UIKit

struct AlertFactory {
    static func create(error: NetworkError, buttonMessage: String? = "확인") -> UIAlertController {
        let alert = UIAlertController(title: nil, message: error.description, preferredStyle: .alert)
        let okAction = UIAlertAction(title: buttonMessage, style: .default, handler: nil)
        alert.addAction(okAction)
        return alert
    }
}
